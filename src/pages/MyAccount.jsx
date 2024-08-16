import Sidebar from "@/components/accountPage/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[1200px]">
        <div className="flex  pt-20">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
