import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Donation dApp</title>
        <meta name="description" content="Donation dApp with NextJS" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
