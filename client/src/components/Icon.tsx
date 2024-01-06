import React from "react";

type IconProps = {
  w?: string;
  h?: string;
  children: JSX.Element;
  className?: string;
};
export default function Icon(props: IconProps) {
  return (
    <div className={`w-${props.w} h-${props.h} ${props.className}`}>
      {props.children}
    </div>
  );
}
