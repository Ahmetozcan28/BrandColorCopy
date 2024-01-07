import React from "react";
import getContrastYIQ from "./Helpers";
export default function Copied({ color }) {
  return (
    <div
      style={{ backgroundColor: `#${color}`, color: getContrastYIQ(color) }}
      className="copied"
    >
      Copied #{color} to clipboard
    </div>
  );
}
