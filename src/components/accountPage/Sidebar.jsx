import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-[400px]">
      <ul className="flex flex-col gap-y-6 text-xl">
        <li className="hover:text-gramed transition-colors">
          <Link>Pesanan Saya</Link>
        </li>
        <li className="hover:text-gramed transition-colors">
          <Link>Akun Saya</Link>
        </li>
        <li className="hover:text-gramed transition-colors">
          <Link to={"/my-account/wishlist"}>Wishlist Saya</Link>
        </li>
        <li className="hover:text-gramed transition-colors">
          <Link>My Value Poin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
