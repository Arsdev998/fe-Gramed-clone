import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import HelpHeader from "./components/header/HelpHeader";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./features/authSlice";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { getWishlist } from "./features/wishlistSlice";

export default function App() {
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispacth(getMe());
  }, [dispacth]);
  useEffect(() => {
    if (user?.id) {
      dispacth(getWishlist(user?.id));
    }
  }, [dispacth, user?.id]);

  return (
    <>
      <HelpHeader />
      <Header />
      <Outlet />
      <Toaster richColors position="top-center" />
    </>
  );
}
