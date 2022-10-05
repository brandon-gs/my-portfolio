import React, { Fragment } from "react";
// Nextjs Document
import Document, { Html, Head, Main, NextScript } from "next/document";
// Theme
import theme from "utils/theme";
// Emotion
import createEmotionCache from "theme/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

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
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="author" content="BrandonGS" />
          <link rel="shortcut icon" href={`/favicon.ico`} />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
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
// it's compatible with static-site generation (SSG).
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

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default MyDocument;
