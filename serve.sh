#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8765}"
HOST="${HOST:-127.0.0.1}"
DIR="$ROOT/site"

if [[ ! -d "$DIR" ]]; then
  echo "Missing site directory: $DIR" >&2
  exit 1
fi

echo "Serving $DIR at http://${HOST}:${PORT}/"
exec python3 -m http.server "$PORT" --bind "$HOST" --directory "$DIR"
