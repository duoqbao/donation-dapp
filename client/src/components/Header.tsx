import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-wrap px-5 py-5 bg-green items-center justify-between">
      <div className="flex cursor-pointer select-none">
        <p className="text-white font-semibold">Decentralize Donation</p>
        <div className="px-5" />
      </div>
      <div className="flex items-center">
        <WalletMultiButton style={{ background: "#333333" }} />
      </div>
    </div>
  );
}
