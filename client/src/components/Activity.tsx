import React from "react";
import Icon from "./Icon";
import Bell from "./icons/Bell";

export default function Activity() {
  return (
    <div className="border-[1px] h-full border-gray rounded-lg p-2">
      <div className="flex items-center">
        <Icon className="w-6 h-6">
          <Bell color="#333333" />
        </Icon>
        <p className="text-sm font-bold mx-2 text-black">Activities</p>
      </div>
      <div className="min-h-[100px] border-t-[1px] border-gray"></div>
    </div>
  );
}
