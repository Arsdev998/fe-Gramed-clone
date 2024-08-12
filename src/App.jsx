import { useEffect, useState } from "react";
import { get } from "./utils/api";
import { Button } from "./components/ui/button";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
