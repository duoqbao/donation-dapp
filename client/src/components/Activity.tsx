import React from "react";
import Icon from "./Icon";
import Bell from "./icons/Bell";

type ActivityProps = {
  children: JSX.Element[];
};
export default function Activity(props: ActivityProps) {
  return (
    <div className="border-[1px] h-full border-gray rounded-lg p-2">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6">
          <Bell color="#333333" />
        </Icon>
        <p className="text-sm font-bold mx-2 text-black">Activities</p>
      </div>
      <div className="min-h-[100px] border-t-[1px] border-gray">
        {props.children}
      </div>
    </div>
  );
}
