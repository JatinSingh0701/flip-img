import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-3/6 h-2/4 bg-zinc-500 rounded-md overflow-hidden relative flex ">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val ? "-translate-x-[100%]" : "-translate-x-[0%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val ? "-translate-x-[100%]" : "-translate-x-[0%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <button
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 flex justify-center items-center rounded-full bg-[#dadada7b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRightLong size={"1em"} />
        </button>
      </div>
    </div>
  );
}

export default Card;
