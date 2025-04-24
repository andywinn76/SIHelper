#!/bin/bash

for file in *.png; do
  # Skip if no .png files are found
  [ -e "$file" ] || continue

  # Get lowercase version, remove 'copy', and strip spaces
  newname=$(echo "$file" | tr '[:upper:]' '[:lower:]' | sed 's/ copy//' | tr -d ' ')
  
  # Rename if the new name is different
  if [[ "$file" != "$newname" ]]; then
    echo "Renaming: '$file' -> '$newname'"
    mv "$file" "$newname"
  fi
done
