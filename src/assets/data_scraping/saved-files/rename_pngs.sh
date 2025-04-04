#!/bin/bash

# Define the directory containing the PNG files
PNG_DIR="downloaded_pngs"

# Ensure the directory exists
if [ ! -d "$PNG_DIR" ]; then
  echo "Directory $PNG_DIR does not exist. Exiting."
  exit 1
fi

# Loop through all PNG files in the directory matching the pattern
for FILE in "$PNG_DIR"/26px-E*.png; do
  # Extract the base filename (remove the directory path)
  BASENAME=$(basename "$FILE")

  # Remove "26px-E" from the filename
  NEW_NAME=${BASENAME#26px-E}

  # Rename the file
  mv "$FILE" "$PNG_DIR/$NEW_NAME"

  # Log the rename
  echo "Renamed: $BASENAME -> $NEW_NAME"
done

echo "Renaming complete."
