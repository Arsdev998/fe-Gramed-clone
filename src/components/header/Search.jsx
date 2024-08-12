import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center w-[400px] text-neutral-600">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari Produk, Judul Buku, Penulis"
        className="w-full p-4 outline-none text-lg"
      />
      {value ? (
        <IoMdCloseCircle onClick={() => setValue("")} className="cursor-pointer text-lg"/>
      ) : (
        <IoIosSearch className="text-2xl"/>
      )}
    </div>
  );
};

export default Search;
