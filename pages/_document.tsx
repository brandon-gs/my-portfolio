import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "utils/theme";
import { ServerStyleSheets } from "@material-ui/core";
import React, { Fragment } from "react";

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
