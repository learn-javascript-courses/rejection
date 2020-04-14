//import App from 'next/app'
import React, {Fragment} from 'react';
import bootstrap from 'bootstrap-css-only';
import '../public/styles/styles.css';


function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <style jsx global>{`
            @font-face {
              font-family: 'vt323';
              src: url('/fonts/VT323-Regular.ttf'); 
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
                font-family: 'Roboto-Medium';
                src: url('/fonts/Roboto-Medium.ttf'); 
                font-weight: bold;
                font-style: normal;
                font-display: swap;
              }
          `}</style>
        </Fragment>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp