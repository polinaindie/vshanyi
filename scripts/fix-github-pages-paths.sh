#!/usr/bin/env bash
# Patch static Next.js mirror for GitHub Pages project site (/vshanyi/).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/site"
BASE="/vshanyi"

patch_file() {
  local file="$1"
  python3 - "$file" "$BASE" <<'PY'
import sys
from pathlib import Path

path = Path(sys.argv[1])
base = sys.argv[2]
text = path.read_text(encoding="utf-8")
original = text

# Avoid double-prefixing if script runs twice.
if f'{base}/_next/' in text:
    pass
else:
    text = text.replace('"/_next/', f'"{base}/_next/')
    text = text.replace("'/_next/", f"'{base}/_next/")
    text = text.replace('p="/_next/"', f'p="{base}/_next/"')

if f'{base}/favicon-' not in text:
    text = text.replace('"/favicon-', f'"{base}/favicon-')
    text = text.replace("'/favicon-", f"'{base}/favicon-")

if text != original:
    path.write_text(text, encoding="utf-8")
    print(f"patched {path}")
PY
}

while IFS= read -r -d '' file; do
  patch_file "$file"
done < <(find "$SITE" -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' \) -print0)

echo "Done."
