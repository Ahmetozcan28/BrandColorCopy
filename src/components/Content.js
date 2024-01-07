import React from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
export default function Content() {
  const { brands } = useContext(MainContext);
  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brand">
        {brands.map((brand, key) => (
          <Brand key={key} brand={brand} />
        ))}
      </section>
    </main>
  );
}
