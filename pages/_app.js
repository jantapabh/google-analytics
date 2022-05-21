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
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteraction"
      />
      <Script id="google-analytics" strategy="afterInteraction">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
