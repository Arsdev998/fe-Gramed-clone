import React from 'react'
import { Button } from '../ui/button'
import { SlUser, SlHandbag } from "react-icons/sl";

const RightHead = () => {
  return (
    <div className="flex w-[150px] justify-between">
      <Button variant="ghost" size="icon" className="border-2 border-gramed text-gramed hover:text-gramed/80 hover:border-gramed/80 text-3xl p-[6px] rounded-full">
        <SlUser className="" />
      </Button>
      <Button variant="ghost" size="icon" className="border-2 border-gramed text-gramed hover:text-gramed/80 hover:border-gramed/80 text-3xl p-[6px] rounded-full">
        <SlHandbag/> 
      </Button>
    </div>
  );
}

export default RightHead