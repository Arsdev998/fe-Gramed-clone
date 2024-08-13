import React from "react";
import { Link } from "react-router-dom";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
const HelpHeader = () => {
  return (
    <header className="flex justify-end p-1  w-full bg-gramed/20">
      <Link to={"/help"} className="mr-[12%] flex items-center gap-x-1">
        <HiMiniQuestionMarkCircle className="mt-0.5" />
        Bantuan
      </Link>
    </header>
  );
};

export default HelpHeader;
