import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="bg-black h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
