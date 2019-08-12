import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../src/theme';


class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" type="image/png" href="/static/img/favicon.png"/>
          <script src="https://js.stripe.com/v3"></script>
          <script src="https://checkout.stripe.com/checkout.js"></script>
          <meta name="title" content="Ligit" />
          <meta name="description" content="Pro-Developer Software Licensing" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="wrannaman" />
          <meta name="keywords" content="license, software license, software licensing, github, dockerhub, bitbucket, gitlab, developer, developer licensing, open source license" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ligit.dev/" />
          <meta property="og:title" content="Ligit" />
          <meta property="og:description" content="Pro-Developer Software Licensing" />
          <meta property="og:image" content="https://ligit.dev/static/img/logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ligit.dev/" />
          <meta property="twitter:title" content="Ligit" />
          <meta property="twitter:description" content="Pro-Developer Software` Licensing" />
          <meta property="twitter:image" content="https://ligit.dev/static/img/logo.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-927WZR5M4E"></script>
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-927WZR5M4E');
          `}}
        />
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
