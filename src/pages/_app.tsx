import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/nav/bnbnav.css";
import "../styles/nav/bnbsearch.css";
import "../styles/nav/bnbhomeimage.css";
import "../styles/inspiration/citycard.css";
import "../styles/inspiration/inspiration.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
