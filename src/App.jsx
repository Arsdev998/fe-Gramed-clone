import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import HelpHeader from "./components/header/HelpHeader";
import { useDispatch } from "react-redux";
import { getMe } from "./features/authSlice";
import { useEffect } from "react";
import { Toaster } from "sonner";

export default function App() {
  const dispacth = useDispatch();
  useEffect(()=>{
    dispacth(getMe())
  },[dispacth])
  return (
    <>
      <HelpHeader />
      <Header />
      <Outlet />
      <Toaster richColors position="top-center"/>
    </>
  );
}
