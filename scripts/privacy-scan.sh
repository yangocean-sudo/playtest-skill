#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-$(pwd)}"

PATTERN='elevici|orbo|/Users/|secret|token|api[_-]?key|private key|BEGIN RSA|BEGIN OPENSSH|BEGIN PRIVATE'

if rg -n --hidden -i "$PATTERN" "$ROOT" \
  --glob '!.git/**' \
  --glob '!scripts/privacy-scan.sh'; then
  echo
  echo "Potential private information found. Review the matches above."
  exit 1
fi

echo "No private-info pattern matches found."
