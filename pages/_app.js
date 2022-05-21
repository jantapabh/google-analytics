import { useEffect } from "react";
import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [router]);
  return (
    <>
      <Script src="/path/to/bower_components/react-ga/dist/react-ga.min.js"></Script>
      <Script strategy="afterInteraction">
        {`
          ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID, { debug: true });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
