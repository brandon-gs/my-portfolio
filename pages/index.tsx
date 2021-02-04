import { Fragment } from "react";
import Head from "next/head";
import { Navbar, Dashboard, About, BottomMenu } from "components";

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Brandon García</title>
    </Head>
    <Navbar />
    <Dashboard />
    <About />
    <BottomMenu />
  </Fragment>
);

export default IndexPage;
