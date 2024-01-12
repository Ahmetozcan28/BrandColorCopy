import React from "react";
import Search from "./Search";
import Brand from "./Brand";
import Loader from "./Loader";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from "react-lazyload";
import Download from "./Download";

export default function Content() {
  const { brands, selectedBrand } = useContext(MainContext);
  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrand.length > 0 && <Download />}
      </header>
      <section className="brand">
        {brands.map((brand, key) => (
          <LazyLoad
            key={key}
            overflow={true}
            once={true}
            placeholder={<Loader />}
          >
            <Brand key={key} brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}
