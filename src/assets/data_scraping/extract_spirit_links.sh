#!/bin/bash

INPUT_HTML="List.html"
OUTPUT_FILE="spirit_links.txt"

# Extract spirit links
grep -oE 'https://spiritislandwiki\.com/index\.php\?title=[^"#]+' "$INPUT_HTML" \
  | grep -vE 'title=File:|title=Template:|title=Category:' \
  | sort -u > "$OUTPUT_FILE"

echo "✅ Extracted $(wc -l < "$OUTPUT_FILE") unique spirit links to '$OUTPUT_FILE'."
