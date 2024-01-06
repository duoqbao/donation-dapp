import React from "react";
import Bell from "./icons/Bell";
import Icon from "./Icon";

export default function NotificationsLine(props: { notifications: string[] }) {
  return (
    <div className="bg-black py-3 text-white flex max-w-[100vw] mx-2 px-2 rounded-md">
      <div className="font-semibold flex items-center border-r-2 pr-5 border-lightgreen bg-black z-10">
        <Icon w="5" h="5" className="mx-2">
          <Bell />
        </Icon>
        Notifications
      </div>
      <div className="scrollbar-hide overflow-hidden whitespace-nowrap">
        <p className="text-base " id="text-banner">
          {props.notifications.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
