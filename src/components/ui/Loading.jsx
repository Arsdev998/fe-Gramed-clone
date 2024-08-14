import React from "react";
import loading from "@/assets/image/loading.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] w-full">
      <img src={loading} alt="loading" className="w-[100px] h-[100px]" />
    </div>
  );
};

export default Loading;
