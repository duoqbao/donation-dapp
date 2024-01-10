import React from "react";
import Icon from "./Icon";
import Bell from "./icons/Bell";

type ActivityProps = {
  children: JSX.Element[];
};
export default function Activity(props: ActivityProps) {
  return (
    <div className=" h-full drop-shadow-2xl shadow-2xl rounded-lg p-2 bg-white my-5">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6">
          <Bell color="#333333" />
        </Icon>
        <p className="text-sm font-bold mx-2 text-black">Activities</p>
      </div>
      <div className="min-h-[100px] border-t-[1px] ">{props.children}</div>
    </div>
  );
}
