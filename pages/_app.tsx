import { PageTransition } from "next-page-transitions";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "utils/theme";
import NProgress from "nprogress";
import Router from "next/router";
import { AppProps, AppContext, AppInitialProps } from "next/app";
import { useEffect, FC } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const TIMEOUT = 400;

  return (
    <PageTransition
      timeout={TIMEOUT}
      classNames="page-transition"
      loadingDelay={500}
      loadingTimeout={{
        enter: TIMEOUT,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />
        <style jsx global>{`
          html {
            height: 100%;
          }

          body {
            height: 100%;
          }

          #__next {
            height: 100%;
          }
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 400ms, transform 400ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 400ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity 400ms;
          }
        `}</style>
      </ThemeProvider>
    </PageTransition>
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
