export const pageview = (url) => {
    console.log("process.env.GOOGLE_ANALYTICS_ID : ",process.env.GOOGLE_ANALYTICS_ID);
    window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
        path_url: url
    })
}