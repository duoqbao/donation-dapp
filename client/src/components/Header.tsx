import * as anchor from "@project-serum/anchor";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import Router from "next/router";
import { PublicKey } from "@solana/web3.js";
import { useAppWallet } from "hooks/wallet";

export default function Header({
  connection,
  publicKey,
}: {
  connection: anchor.web3.Connection;
  publicKey: PublicKey | null;
}) {
  const { balance } = useAppWallet(connection, publicKey);
  return (
    <div className="flex flex-wrap px-5 py-5 bg-green items-center justify-between">
      <div className="flex cursor-pointer select-none">
        <p className="text-white font-semibold">Decentralize Donation</p>
        <div className="px-5">
          <p
            className="text-sm text-black underline"
            onClick={() => Router.push("registration")}
          >
            For creators
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mx-2">
          <p className="text-xs">Your balance</p>
          <p className="text-black font-semibold">{balance} Sol</p>
        </div>
        <WalletMultiButton style={{ background: "#333333" }} />
      </div>
    </div>
  );
}
