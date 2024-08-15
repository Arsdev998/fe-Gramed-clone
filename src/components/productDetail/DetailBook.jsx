import React from "react";
import { Link } from "react-router-dom";

const DetailBook = ({
  jumlah,
  penerbit,
  tanggal,
  berat,
  isbn,
  lebar,
  bahasa,
  panjang,
}) => {
  return (
    <div id="detail" className="mt-5">
      <h6>Detail</h6>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex flex-col text-xs text-gray-600">
          Jumlah Halaman
          <span className="text-sm text-gray-700">{jumlah}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          Penerbit
          <Link className="text-sm text-gramed">{penerbit}</Link>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          Tanggal Terbit
          <span className="text-sm text-gray-700">{tanggal}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          Berat
          <span className="text-sm text-gray-700">{berat}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          ISBN
          <span className="text-sm text-gray-700">{isbn}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          Lebar
          <span className="text-sm text-gray-700">{lebar}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
         Bahasa
          <span className="text-sm text-gray-700">{bahasa}</span>
        </li>
        <li className="flex flex-col text-xs text-gray-600">
          Panjang
          <span className="text-sm text-gray-700">{panjang}</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailBook;
