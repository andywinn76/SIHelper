
import React from "react";
import { renderIcons } from "../utils/renderIcons.jsx";

export default function Paragraphs({ text, className = "" }) {
  if (typeof text !== "string") return null;

  return text.split("\n\n").map((paragraph, i) => (
    <p key={i} className={`mb-4 ${className}`}>
      {paragraph.split("\n").map((line, j, arr) => (
        <React.Fragment key={j}>
          {renderIcons(line)}
          {j < arr.length - 1 && (
            <span className="block h-2 soft-break" />
          )}
        </React.Fragment>
      ))}
    </p>
  ));
}
