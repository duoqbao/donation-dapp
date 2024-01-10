import React from "react";

type IconProps = {
  w?: string;
  h?: string;
  children: JSX.Element;
  className?: string;
  onClick?: () => void | Function | any;
};
export default function Icon(props: IconProps) {
  return (
    <div
      className={`w-${props.w} h-${props.h} ${props.className} flex justify-center items-center`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
