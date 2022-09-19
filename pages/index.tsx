import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LandingHero } from "@components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Marcellinus Elbert</title>
      </Head>
      <div className="pt-[20%]">
        <LandingHero />
      </div>
    </div>
  );
};

export default Home;
