import React, { useEffect, useState } from "react";
import BrandData from "./brands.json";
import "./App.css";
import MainContext from "./MainContext";
import Copied from "./Copied";
import Content from "./components/Content";
import Collections from "./components/Collections";
import Sidebar from "./components/Sidebar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  const brandsArray = [];

  Object.keys(BrandData).forEach((key) => {
    brandsArray.push(BrandData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  const data = {
    brands,
    selectedBrand,
    setSelectedBrand,
    setCopied,
    setSearch,
  };
  useEffect(() => {
    const filteredBrand = brandsArray.filter((brand) =>
      brand.title.toLowerCase().includes(search.toLowerCase())
    );
    setBrands(filteredBrand);
  }, [search]);

  useEffect(() => {}, [selectedBrand]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [copied]);
  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/collection/:slugs" element={<Collections />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
