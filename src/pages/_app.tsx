import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/nav/bnbnav.css";
import "../styles/nav/bnbsearch.css";
import "../styles/nav/bnbhomeimage.css";
import "../styles/inspiration/citycard.css";
import "../styles/inspiration/inspiration.css";
import "../styles/inspiration/expcard.css";
import "../styles/inspiration/giftcard.css";
import "../styles/inspiration/askhost.css";
import "../styles/inspiration/prefooter/prefootercell.css";
import "../styles/inspiration/prefooter/prefooterrow.css";
import "../styles/inspiration/prefooter/prefooterheader.css";
import "../styles/footer/footer.css";
import "../styles/footer/footercolumn.css";
import "../styles/footer/footerkicker.css";

import Footer from "@/components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
