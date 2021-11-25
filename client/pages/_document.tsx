import React, { Fragment } from "react";
// Nextjs Document
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
// Theme
import theme from "utils/theme";

interface GoogleTags {
  __html: string;
}

class MyDocument extends Document {
  setGoogleTags(): GoogleTags {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KS0M93HBNQ')
      `,
    };
  }

  render(): JSX.Element {
    const isProduction = process.env.NODE_ENV === "production";
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="author" content="BrandonGS" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href={`/css/global.css`} />
          <link rel="stylesheet" href={`/css/nprogress.css`} />
          <link rel="shortcut icon" href={`/favicon.ico`} />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-KS0M93HBNQ"
              ></script>
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
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
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
