import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "utils/theme";
import { ServerStyleSheets } from "@material-ui/core";
import React from "react";

class MyDocument extends Document {
  render(): JSX.Element {
    const prefix = this.props.__NEXT_DATA__.assetPrefix || "";
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href={`${prefix}/css/global.css`} />
          <link rel="stylesheet" href={`${prefix}/css/nprogress.css`} />
          <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement,
    ],
  };
};

export default MyDocument;
