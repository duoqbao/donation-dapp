import React from "react";
import Head from "next/head";
import { RegistrationView } from "views";
export default function Registration() {
  return (
    <>
      <Head>
        <title>DdA | Become creator on our platform</title>
        <meta name="description" content="Donation dApp with NextJS" />
      </Head>
      <RegistrationView />
    </>
  );
}
