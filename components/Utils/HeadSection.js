import Head from "next/head";
import Script from "next/script";
export const GA_TRACKING_ID = "G-WRNC019FWH";
export const GA_TRACKING_IDs = "AW-439667854";

export default function HeadSection() {
  return (
    <>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <Script
        id="gascript"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script
        id="gahtml"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}          
                    gtag('js', new Date());            
                    gtag('config', '${GA_TRACKING_ID}',{
                    page_path: window.location.pathname,
                    cookie_flags: 'max-age=7200;secure;samesite=none'
                    });`,
        }}
      ></Script>

      {/* Google Tag */}
      <Script
        id="gascript"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_IDs}`}
      ></Script>
      <Script
        id="gahtml"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_TRACKING_IDs}'); `,
        }}
      ></Script>
  
         {/* Google Tag Manager */}
         <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M26M84QX');
          `,
        }}
      />

    </>
  );
}
