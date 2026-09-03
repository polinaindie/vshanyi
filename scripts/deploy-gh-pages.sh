#!/usr/bin/env bash
# Sync site/ to gh-pages branch and push.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORKTREE="$ROOT/.gh-pages-worktree"

"$ROOT/scripts/fix-github-pages-paths.sh"

if [[ ! -d "$WORKTREE/.git" ]]; then
  git -C "$ROOT" worktree add -B gh-pages "$WORKTREE" gh-pages
fi

rsync -a --delete \
  --exclude '.git' \
  --exclude '.DS_Store' \
  "$ROOT/site/" "$WORKTREE/"

touch "$WORKTREE/.nojekyll"

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "gh-pages: no changes to deploy"
else
  git -C "$WORKTREE" commit -m "$(cat <<'EOF'
Fix GitHub Pages asset paths for /vshanyi/ subdirectory.

Webpack publicPath and absolute /_next references now resolve under the project base path.
EOF
)"
  git -C "$WORKTREE" push origin gh-pages
  echo "Deployed to gh-pages"
fi
