import React, { useState } from "react";
import { Header } from "components";
import NotificationsLine from "components/NotificationsLine";
import CreatorRanking from "components/CreatorRanking";
import Activity from "components/Activity";
import Donation, { PropsDonation } from "components/Donation";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useDonate } from "hooks/useDonate";
export function HomeView() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const { creators } = useDonate(connection, publicKey);

  return (
    <div>
      <Header connection={connection} publicKey={publicKey} />
      <div className="my-5 max-w-[98vw] ">
        <NotificationsLine notifications={_notifications} />
      </div>
      <CreatorRanking creators={creators} />
      <div className="w-full p-5">
        <Activity>
          {donations.map((item: PropsDonation, index: number) => (
            <Donation {...item} key={index} />
          ))}
        </Activity>
      </div>
    </div>
  );
}

const _notifications = [
  "Build bộ PC hợp lý giá cực shock tại PCM, có cả video phân tích và hướng dẫn cho anh chị em, vào xem và",
  "Để Thành Công chỉ sau 1 đêm như Thầy Giáo Ba. Tinikun tiết lộ bí mật ngay sinh nhật SBTC BA RỌI BÉO.",
];

export const donations = [
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
  {
    name: "Someone",
    amount: "1.00",
    description: "a special day",
    to: "Ba Roi Beo",
  },
];
