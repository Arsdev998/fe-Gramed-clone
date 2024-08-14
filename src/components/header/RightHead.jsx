import React from "react";
import { Button } from "../ui/button";
import { SlUser, SlHandbag } from "react-icons/sl";
import { useSelector } from "react-redux";
import { ModalLogin } from "../modal/ModalLogin";

const RightHead = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  return (
    <div className="flex w-[150px] justify-between">
      {isAuthenticated ? (
        <Button
          variant="ghost"
          size="icon"
          className="border-2 border-gramed text-gramed hover:text-gramed/80 hover:border-gramed/80 text-3xl p-[6px] rounded-full"
        >
          <SlUser className="" />
        </Button>
      ) : (
        <ModalLogin />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="border-2 border-gramed text-gramed hover:text-gramed/80 hover:border-gramed/80 text-3xl p-[6px] rounded-full"
      >
        <SlHandbag />
      </Button>
    </div>
  );
};

export default RightHead;
