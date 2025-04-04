#!/bin/bash

HTML_FILE="List.html"
OUTPUT_DIR="downloaded_thumbs"

mkdir -p "$OUTPUT_DIR"

# Extract each PNG path from the HTML, including from srcset
grep -oP 'srcset="[^"]+"' "$HTML_FILE" | \
  grep -oP '/images/thumb[^ ]+\.png' | \
  sort -u > thumb_paths.txt

echo "Found $(wc -l < thumb_paths.txt) thumbnail paths."

# Download each image
while IFS= read -r path; do
  RAW_FILE_NAME=$(basename "$path")

  # Remove leading '283px-' or similar and replace %27
  CLEAN_FILE_NAME=$(echo "$RAW_FILE_NAME" | sed -E 's/^[0-9]+px-//' | sed 's/%27//g')

  FULL_URL="https://spiritislandwiki.com$path"
  OUTPUT_PATH="$OUTPUT_DIR/$CLEAN_FILE_NAME"

  echo "⬇️ Downloading $CLEAN_FILE_NAME..."

  curl --fail --ssl-no-revoke -sSL "$FULL_URL" -o "$OUTPUT_PATH"

  if [ $? -eq 0 ]; then
    echo "✅ Saved to $OUTPUT_PATH"
  else
    echo "❌ Failed to download $FULL_URL"
  fi
done < thumb_paths.txt

rm thumb_paths.txt
echo "🎉 Done downloading thumbnails to '$OUTPUT_DIR'."
