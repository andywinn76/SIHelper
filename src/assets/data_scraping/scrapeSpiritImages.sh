#!/bin/bash

HTML_FILE="$1"
OUTPUT_DIR="downloaded_spirits"
TMP_DETAIL="file_page.html"
BASE_URL="https://spiritislandwiki.com"

if [ -z "$HTML_FILE" ] || [ ! -f "$HTML_FILE" ]; then
  echo "❌ Provide a valid saved HTML file from the Spirit Island Wiki."
  echo "Usage: ./scrape_saved_spirits.sh List_of_Spirits.html"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

echo "🔎 Extracting File: page links for spirit panels..."
grep -oE 'href="/index.php\?title=File:Spirit_Panel_[^"]+\.png"' "$HTML_FILE" \
  | sed 's/href="\(.*\)"/\1/' \
  | sort -u > spirit_links.txt

COUNT=$(wc -l < spirit_links.txt)
echo "🧠 Found $COUNT spirit panel File pages."

if [ "$COUNT" -eq 0 ]; then
  echo "❌ No spirit images found. Exiting."
  exit 1
fi

while read -r RELATIVE_LINK; do
  FILE_PAGE="${BASE_URL}${RELATIVE_LINK}"
  echo "🌐 Visiting $FILE_PAGE"

  curl -s "$FILE_PAGE" -o "$TMP_DETAIL"

  IMAGE_URL=$(grep -oE 'https://spiritislandwiki\.com/images/[^"]+\.png' "$TMP_DETAIL" | head -n 1)

  if [ -n "$IMAGE_URL" ]; then
    CLEAN_NAME=$(basename "$IMAGE_URL" | sed 's/^Spirit_Panel_//')
    echo "📥 Downloading $CLEAN_NAME"
    curl -s "$IMAGE_URL" -o "$OUTPUT_DIR/$CLEAN_NAME"
  else
    echo "⚠️ Could not find image for $RELATIVE_LINK"
  fi
done < spirit_links.txt

rm -f "$TMP_DETAIL" spirit_links.txt

echo "✅ Done! All spirit panels saved to $OUTPUT_DIR"
