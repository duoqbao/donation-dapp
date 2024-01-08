import React from "react";
import { diceBearURL } from "utils/avatarGen";

export type PropsDonation = {
  name: string;
  amount: string;
  description: string;
  to: string;
};
export default function Donation(props: PropsDonation) {
  return (
    <div className="m-5 border-b-[1px] border-gray pb-2 cursor-pointer">
      <div className="flex items-start ">
        <img
          width={50}
          height={50}
          src={diceBearURL(props.name)}
          className="bg-lightgreen rounded-full"
        />
        <div className="flex flex-col mx-3">
          <p className="text-base">{props.name}</p>
          <p className="text-xs -mb-2">one sec ago</p>
        </div>
      </div>
      <div>
        <span className="font-base text-black text-sm">
          <span className="font-light text-black text-xs">
            {" "}
            just donated to{" "}
          </span>
          {props.to} - {props.amount} Sol{" "}
          <span className="font-light text-black text-xs"> with message:</span>
        </span>
        <div className="mx-2">
          <p className="text-sm text-black">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
