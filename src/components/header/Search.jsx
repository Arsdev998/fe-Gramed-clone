import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === 'click') {
      navigate(`/books?search=${searchQuery}`);
    }
  };
  return (
    <div className="flex items-center w-[500px] text-neutral-600 p-1 bg-neutral-200 rounded-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Cari Produk, Judul Buku, Penulis"
        className="w-full py-1 px-3 bg-transparent outline-none text-lg"
      />
      {searchQuery ? (
        <IoMdCloseCircle
          onClick={() => setSearchQuery("")}
          className="cursor-pointer text-lg"
        />
      ) : (
        <IoIosSearch onClick={handleSearch} className="text-2xl" />
      )}
    </div>
  );
};

export default Search;
