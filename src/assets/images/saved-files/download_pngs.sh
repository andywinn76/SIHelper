#!/bin/bash

# Define the URL to scrape
URL="https://spiritislandwiki.com/index.php?title=Template:Element"

# Define the output directory for downloaded images
OUTPUT_DIR="downloaded_pngs"

# Create the directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Extract all PNG image URLs and save them to a temporary file
curl -k -L -s "$URL" | grep -oP '(?<=src=")[^"]+' | grep '\.png$' | sed 's|^/|https://spiritislandwiki.com/|' > png_links.txt

# Download each PNG image from the list
while read -r IMAGE_URL; do
  echo "Downloading $IMAGE_URL..."
  curl -k -O "$IMAGE_URL" --output-dir "$OUTPUT_DIR"
done < png_links.txt

# Clean up the temporary file
rm png_links.txt

echo "All PNG images have been downloaded to the '$OUTPUT_DIR' directory."


