import React from "react";
import { GrSearch } from "react-icons/gr";
import MainContext from "../MainContext";
import { useContext } from "react";
export default function Search() {
  const { setSearch } = useContext(MainContext);

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Brands"
      />
     
    </div>
  );
}
