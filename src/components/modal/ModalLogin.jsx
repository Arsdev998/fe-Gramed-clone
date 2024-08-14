import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/authSlice";

export function ModalLogin() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.auth)


  const handlelogin = (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      dispatch(login(data));
    } catch (error) {
      console.log(error);
      
    }
  };
  console.log(error);
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gramed text-lg">Masuk</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] right-[1%] top-[35%]">
        <DialogHeader>
          <DialogTitle>Masuk ke Akun Anda</DialogTitle>
          {error && <p className="text-red-600">{error}</p>}
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="relative">
            <Label
              htmlFor="email"
              className={`absolute left-2 top-2 transition-all duration-200 ${
                emailFocused
                  ? "text-xs -top-2 left-1 text-red-600"
                  : "text-sm text-gray-600"
              }`}
            >
              Email
            </Label>
            <Input
              id="email"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              balue={email}
              className="pt-6 pb-2 px-2 w-full border-0 rounded-none border-b-2 border-b-black outline-none focus:ring-0"
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => setEmailFocused(e.target.value !== "")}
            />
          </div>
          <div className="relative">
            <Label
              htmlFor="password"
              className={`absolute left-2 top-2 transition-all duration-200 ${
                passwordFocused
                  ? "text-xs -top-2 left-1 text-red-600"
                  : "text-sm text-gray-600"
              }`}
            >
              Kata Sandi
            </Label>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="pt-6 pb-2 px-2 w-full border-0 rounded-none border-b-2 border-b-black outline-none focus:ring-0"
              onFocus={() => setPasswordFocused(true)}
              onBlur={(e) => setPasswordFocused(e.target.value !== "")}
            />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handlelogin}>
              Masuk
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
