import React, { useState } from "react";
import { diceBearURL } from "utils/avatarGen";
export type PropsCreator = {
  name?: string;
  donated?: number;
  ranked?: number;
};
export default function CreatorNode(props: PropsCreator) {
  return (
    <div className="flex flex-col justify-center items-center mx-5 cursor-pointer ">
      <div className=" bg-lightgreen p-3 rounded-full relative mb-3 border-gray border-2 hover:border-lightgreen transition-all ease-in-out">
        <img
          className="select-none"
          src={diceBearURL(`${props.name}${props.ranked}`)}
          width={40}
          height={40}
        />
        <p className="absolute -bottom-3 right-[20px] font-semibold text-sm z-10 bg-green w-5 h-5 rounded-full text-center text-black">
          {props.ranked}
        </p>
      </div>
      <p className="text-black font-bold text-sm">{props.name}</p>
    </div>
  );
}
