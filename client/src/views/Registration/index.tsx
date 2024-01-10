import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Icon from "components/Icon";
import Back from "components/icons/Back";
import { useDonate } from "hooks/useDonate";
import Router from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Donation, { PropsDonation } from "components/Donation";
import Activity from "components/Activity";
import { donations } from "views/HomeView";

export function RegistrationView() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const { initializeCreator, profile, loading } = useDonate(
    connection,
    publicKey
  );

  const [name, setName] = useState("");
  const [field, setField] = useState("");

  const confirmInitialize = () => initializeCreator(name, field);
  return (
    <motion.div
      className="w-full h-[100vh] bg-green p-5 "
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <Icon
          className="w-12 h-12 p-2 bg-black rounded-full bg-opacity-90 hover:bg-opacity-100 hover:scale-95 transition-all ease-in-out duration-100 cursor-pointer"
          onClick={() => Router.back()}
        >
          <Back />
        </Icon>
        <p className="text-white text-center font-semibold"></p>
        <div>
          <WalletMultiButton />
        </div>
      </div>
      {profile ? (
        <motion.div
          className="m-5"
          initial={{ translateY: 60 }}
          animate={{ translateY: 0 }}
        >
          <span className="">
            Hi {profile.name} - <span className="text-sm">{profile.field}</span>
          </span>
          <Activity>
            {donations.map((item: PropsDonation, index: number) => (
              <Donation {...item} key={index} />
            ))}
          </Activity>
        </motion.div>
      ) : (
        <div className="flex justify-center items-center">
          <motion.div
            className="rounded-md shadow-lg w-1/2 bg-[#eee] flex flex-col p-5 "
            initial={{ translateY: -60 }}
            animate={{ translateY: 0 }}
          >
            <p className="text-center text-black font-medium text-base">
              Creator registration form
            </p>
            <div className="mt-5">
              <p className="text-sm"> Name</p>
              <input
                className="border rounded-md border-[#999] focus:outline-none px-2 min-h-[30px] text-sm"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-sm">Field</p>
              <input
                className="border rounded-md border-[#999] focus:outline-none px-2 min-h-[30px] text-sm placeholder:text-red"
                onChange={(e) => setField(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <div
                className="bg-green px-5 py-2 rounded-2xl cursor-pointer"
                onClick={() => confirmInitialize()}
              >
                <p className="text-base font-semibold text-black hover:text-white transstion-all ease-in-out duration-500 select-none">
                  Become creator
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
