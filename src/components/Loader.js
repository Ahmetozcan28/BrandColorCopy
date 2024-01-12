import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={100}
      viewBox="0 0 400 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="14" y="27" rx="0" ry="0" width="127" height="31" />
      <rect x="16" y="74" rx="0" ry="0" width="85" height="47" />
      <rect x="89" y="106" rx="0" ry="0" width="6" height="0" />
      <rect x="111" y="74" rx="0" ry="0" width="85" height="47" />
      <rect x="206" y="75" rx="0" ry="0" width="85" height="47" />
    </ContentLoader>
  );
}
