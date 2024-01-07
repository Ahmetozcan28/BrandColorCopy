import React from "react";
import { useContext } from "react";
import getContrastYIQ from "../Helpers";
import MainContext from "../MainContext";
import Clipboard from "react-clipboard.js";
import { MdContentCopy } from "react-icons/md";
export default function Brand({ brand }) {
  const { selectedBrand, setSelectedBrand, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrand.includes(brand.slug)) {
      setSelectedBrand(selectedBrand.filter((item) => item !== brand.slug));
    } else {
      setSelectedBrand([...selectedBrand, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };
  return (
    <>
      <div
        className={`brands ${
          selectedBrand.includes(brand.slug) ? "active" : ""
        }`}
      >
        <h5 style={{ cursor: "pointer" }} onClick={toggleSelected}>
          {brand.title}
        </h5>
        <div className="brand-colors">
          {brand.colors.map((color, key) => (
            <Clipboard
              component="span"
              data-clipboard-text={`#${color}`}
              key={key}
              onSuccess={() => setColor(color)}
              className="brand-color"
              style={{
                cursor: "pointer",
                backgroundColor: `#${color}`,
                color: getContrastYIQ(color),
              }}
            >
              <MdContentCopy className="copy-icon" />{color}
            </Clipboard>
          ))}
        </div>
      </div>
    </>
  );
}
