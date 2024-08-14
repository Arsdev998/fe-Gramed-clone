import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center w-[500px] text-neutral-600 p-1 bg-neutral-200 rounded-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari Produk, Judul Buku, Penulis"
        className="w-full py-1 px-3 bg-transparent outline-none text-lg"
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
