import React, { useEffect, useContext, useState } from "react";
import MainContext from "../MainContext";
import { GrLink, GrLinkBottom, GrClose } from "react-icons/gr";

export default function Download() {
  const { selectedBrand, brands, setSelectedBrand } = useContext(MainContext);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [cssMethod, setCssMethod] = useState("css");

  useEffect(() => {
    if (selectedBrand.length > 0) {
      let output = "";
      switch (cssMethod) {
        case "css":
          output += ":root {\n";
          selectedBrand.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;

        case "scss":
          selectedBrand.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$${slug}-${key}: #${color};\n`;
            });
          });
          break;
        case "less":
          selectedBrand.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrand, cssMethod]);

  const getLink = () => {
    const link = selectedBrand.join(",");
    prompt(
      "Here is the URL to share",
      `http://localhost:3000/collection/${link}`
    );
  };

  return (
    <div className="download">
      <div className="action">
        <select
          className="select-css"
          onChange={(e) => setCssMethod(e.target.value)}
        >
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brand.${cssMethod}`} href={downloadUrl}>
          <GrLinkBottom />
        </a>

        <button onClick={getLink}>
          <GrLink />
        </button>
      </div>

      <div className="selected" onClick={() => setSelectedBrand([])}>
        <GrClose />
        {selectedBrand.length} brands collected
      </div>
    </div>
  );
}
