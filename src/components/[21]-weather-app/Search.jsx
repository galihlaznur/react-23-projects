import React from "react";
import style from "./search.module.css";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className={style["search-engine"]}>
      <input
        type="text"
        name="search"
        placeholder="Enter City Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
