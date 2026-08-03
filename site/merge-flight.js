// Rebuilds the RSC flight stream in the mirrored index.html.
// A previous pass deleted the tail rows of the stream, which left dangling
// $L31/$L32/$L33/$L35 references and made React hang with "Connection closed".
// Rows still present locally keep their (customized) content; the deleted ones
// are refilled from a pristine copy of the origin page.
const fs = require('fs');

const LOCAL = process.argv[2];
const ORIGIN = process.argv[3];

function readFlight(file) {
  const html = fs.readFileSync(file, 'utf8');
  const re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
  const parts = [];
  let m;
  while ((m = re.exec(html))) parts.push(eval(m[1]));
  return parts.join('');
}

// Rows are newline separated, except `T<hexlen>,` rows: their payload is a raw
// blob of exactly hexlen UTF-8 bytes that may contain newlines and is NOT
// newline terminated. Each row keeps its own terminator so the stream can be
// reassembled byte for byte.
function splitRows(flight) {
  const rows = [];
  const buf = Buffer.from(flight, 'utf8');
  let i = 0;
  while (i < buf.length) {
    let nl = buf.indexOf(0x0a, i);
    if (nl === -1) nl = buf.length;
    const line = buf.slice(i, nl).toString('utf8');
    const m = line.match(/^([0-9a-fA-F]*):T([0-9a-fA-F]+),/);
    if (m) {
      const end = i + Buffer.byteLength(`${m[1]}:T${m[2]},`, 'utf8') + parseInt(m[2], 16);
      rows.push({ id: m[1], raw: buf.slice(i, end).toString('utf8') });
      i = end;
      continue;
    }
    rows.push({
      id: (line.match(/^([0-9a-fA-F]*):/) || [, null])[1],
      raw: buf.slice(i, Math.min(nl + 1, buf.length)).toString('utf8'),
    });
    i = nl + 1;
  }
  return rows.filter((r) => r.raw.length > 0);
}

const localRows = splitRows(readFlight(LOCAL));
const originRows = splitRows(readFlight(ORIGIN));

const localById = new Map();
for (const r of localRows) if (r.id) localById.set(r.id, r);

// Hint rows carry no id; keep the local copies in their original order.
const localHints = localRows.filter((r) => !r.id);
let hintCursor = 0;

const merged = [];
const restored = [];
for (const r of originRows) {
  if (!r.id) {
    merged.push(hintCursor < localHints.length ? localHints[hintCursor++] : r);
    continue;
  }
  const local = localById.get(r.id);
  if (local) {
    merged.push(local);
  } else {
    merged.push(r);
    restored.push(r.id);
  }
}

const seen = new Set(merged.map((r) => r.id).filter(Boolean));
for (const r of localRows) {
  if (r.id && !seen.has(r.id)) {
    merged.push(r);
    console.log('local-only row appended:', r.id);
  }
}

const flight = merged.map((r) => r.raw).join('');

console.log('local rows :', localRows.length);
console.log('origin rows:', originRows.length);
console.log('merged rows:', merged.length);
console.log('restored   :', restored.join(', '));

// Re-emit as a single push; the flight parser only cares about concatenation.
const html = fs.readFileSync(LOCAL, 'utf8');
const pushRe = /<script>(?:\(self\.__next_f=self\.__next_f\|\|\[\]\)\.push\(\[0\]\)|self\.__next_f\.push\(\[1,(?:"(?:[^"\\]|\\.)*")\]\))<\/script>/g;
const matches = [...html.matchAll(pushRe)];
if (matches.length === 0) throw new Error('no flight push scripts found');

const first = matches[0].index;
const last = matches[matches.length - 1].index + matches[matches.length - 1][0].length;
// Anything between the pushes must be preserved (the webpack runtime tag sits there).
const between = html
  .slice(first, last)
  .replace(pushRe, '')
  .trim();

const replacement =
  '<script>(self.__next_f=self.__next_f||[]).push([0])</script>' +
  between +
  '<script>self.__next_f.push([1,' + JSON.stringify(flight) + '])</script>';

const out = html.slice(0, first) + replacement + html.slice(last);
fs.writeFileSync(LOCAL, out, 'utf8');
console.log('preserved between-pushes markup:', JSON.stringify(between.slice(0, 120)));
console.log('written', LOCAL, out.length, 'bytes');
