import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

export function ModalShare() {
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("Link Disalin");
  }

  const shareFb = () => {
    const url = encodeURIComponent(window.location.href);
    const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(fbShare, "_blank");
  }

   const shareOnTwitter = () => {
     const url = encodeURIComponent(window.location.href);
     const text = encodeURIComponent("Ayo Lihat buku ini");
     const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
     window.open(twitterShareUrl, "_blank");
   };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-3xl"
        >
          <IoShareSocialSharp className="text-2xl text-gray-500 cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none left-[50%]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">Bagikan Buku Ini</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex justify-around">
          <div className="text-center cursor-pointer" onClick={copy}>
            <IoCopyOutline className="text-5xl text-gramed"/>
            Salin
          </div>
          <div className="text-center cursor-pointer" onClick={shareFb}>
           <FaFacebook className="text-5xl text-blue-800"/>
           Facebook
          </div>
          <div className="text-center cursor-pointer" onClick={shareOnTwitter}>
           <FaSquareXTwitter className="text-5xl text-black"/>
           Twitter
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
