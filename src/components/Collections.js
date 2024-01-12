import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Brand from "./Brand";
import LazyLoad from "react-lazyload";
import { useContext } from "react";
import MainContext from "../MainContext";
import Download from "./Download";
import { GrFormPreviousLink } from "react-icons/gr";

export default function Collections() {
  const { setSelectedBrand, brands, selectedBrand } = useContext(MainContext);
  const { slugs } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedBrand(slugs.split(","));
  }, []);
  const clearBrands = () => {
    setSelectedBrand([]);
    navigate("/");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      selectedBrand.length === 0 && navigate("/");
    }, 0);

    return () => clearTimeout(timerId);
  }, [selectedBrand, navigate]);

  return (
    <main className="content">
      <header className="header">
        <a
          style={{
            margin: "0 10px",
            cursor: "pointer",
          }}
          onClick={clearBrands}
          className="back"
        >
          <GrFormPreviousLink />
          All brands
        </a>
        {selectedBrand.length > 0 && <Download />}
      </header>
      <section className="brand">
        {selectedBrand.map((slug, key) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={key}
              overflow={true}
              once={true}
              placeholder="Yükleniyorr"
            >
              <Brand key={key} brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}
