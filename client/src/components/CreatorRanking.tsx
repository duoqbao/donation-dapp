import React, { useState } from "react";
import CreatorNode, { PropsCreator } from "./CreatorNode";

type RankingProps = {
  creators: any | PropsCreator[] | Array<PropsCreator>[];
};

export default function CreatorRanking(props: RankingProps) {
  const [openDetailCreator, setOpenDetailCreator] = useState(false);

  return (
    <div className="flex flex-wrap">
      {props.creators.map((item: PropsCreator | any, index: number) => (
        <CreatorNode
          onClick={() => setOpenDetailCreator(true)}
          {...item}
          key={index}
          ranked={index + 1}
          name={item.account.name}
          donated={item.account.donated}
          wallet={item.account.wallet}
        />
      ))}
    </div>
  );
}
