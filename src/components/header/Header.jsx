import React from "react";
import Nav from "./nav";
import logo from "@/assets/image/logo.png";
import Search from "./Search";
import RightHead from "./RightHead";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center p-3 justify-evenly border-b-2">
      <div className="">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex  items-center">
        <Nav />
        <Search />
      </div>
      <RightHead />
    </header>
  );
};

export default Header;
