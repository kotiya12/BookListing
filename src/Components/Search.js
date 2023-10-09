import React from "react";

const Search = ({ search, setSearch, searchFlag, fetchData, handleSearch }) => {
  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!searchFlag ? (
          <button onClick={handleSearch}>Search</button>
        ) : (
          <button onClick={fetchData}>X</button>
        )}
      </div>
    </div>
  );
};

export default Search;
