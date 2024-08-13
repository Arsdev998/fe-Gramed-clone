import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import HelpHeader from "./components/header/HelpHeader";

export default function App() {
  return (
    <>
      <HelpHeader />
      <Header />
      <Outlet />
    </>
  );
}
