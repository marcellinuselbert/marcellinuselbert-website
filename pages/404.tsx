import type { NextPage } from "next";
import Head from "next/head";

import { Header, LandingHero } from "@components";
import {useEffect, useRef} from "react"

const NotFound: NextPage = () => {

    const ref = useRef(null);
   useEffect(() => {
      import("@lottiefiles/lottie-player");
    });
  return (
    <div>
      <Head>
        <title>Marcellinus Elbert | 404 Not Found</title>
      </Head>
      <div className="pt-[10%] h-screen">
        <div className="flex justify-center">
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
        
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_adtqs4jj.json"
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
        </div>

        <Header
          preset="h1"
          className="text-center text-transparent bg-clip-text  bg-gradient-to-br from-[#2193b0] to-[#6dd5ed]"
        >
          Wait...
        </Header>
        <Header
          preset="h1"
          className="text-center text-transparent bg-clip-text  bg-gradient-to-br from-[#348F50] to-[#56B4D3]"
        >
          I'm Cooking Something
        </Header>
      </div>
    </div>
  );
};

export default NotFound;
