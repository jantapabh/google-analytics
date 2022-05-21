import { useEffect } from 'react'
import "../styles/globals.css";
import { useRouter } from "next/router";
import * as ga from "../lib/googleAnalyticsScript";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouterChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router]);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
