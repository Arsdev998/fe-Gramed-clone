import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/authSlice";
import { SlUser } from "react-icons/sl";
import myValue from "@/assets/image/myvalue.svg";
import { Link } from "react-router-dom";

export function ModalProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-2 border-gramed text-gramed hover:text-gramed/80 hover:border-gramed/80 text-3xl p-[6px] rounded-full"
        >
          <SlUser className="" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" right-[8%] top-[30%] rounded-none max-w-[300px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Halo, {user?.name}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col justify-start gap-y-2">
            <div className="p-2 flex gap-x-2 items-center rounded-3xl bg-blue-950">
              <img src={myValue} alt="" />
              <h2 className="text-lg text-white font-bold">Aktifkan My Vlue</h2>
            </div>
            <ul className="flex flex-col gap-y-4 font-semibold text-[16px] text-gray-800">
              <li>
                <Link>Pesanan Saya</Link>
              </li>
              <li>
                <Link>Akun Saya</Link>
              </li>
              <li>
                <Link>Wishlist Saya</Link>
              </li>
            </ul>
          </div>
        </DialogDescription>
        <DialogFooter className="flex !justify-start !p-0">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-red-500 hover:text-red-400 p-0"
          >
            Keluar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
