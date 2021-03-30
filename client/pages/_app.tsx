import * as React from "react";
// Types
import { AppProps, AppContext, AppInitialProps } from "next/app";
// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "utils/theme";
// Progress load page
import NProgress from "nprogress";
import Router from "next/router";
// Motion
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const cache = createCache({ key: "css", prepend: true });

// Config nprogress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: React.FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export async function getServerSideProps({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
}

export default MyApp;
