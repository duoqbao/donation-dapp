import React from "react";
import CreatorNode, { PropsCreator } from "./CreatorNode";

type RankingProps = {
  creators: PropsCreator[] | Array<PropsCreator>[];
};

export default function CreatorRanking(props: RankingProps) {
  return (
    <div className="flex flex-wrap">
      {props.creators.map((item: PropsCreator, index: number) => (
        <CreatorNode {...item} key={index} ranked={index + 1} />
      ))}
    </div>
  );
}
