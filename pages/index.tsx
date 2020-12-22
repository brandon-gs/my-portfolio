import { Fragment } from "react";
import { Navbar, Dashboard, About, BottomMenu } from "components";

const IndexPage = () => (
  <Fragment>
    <Navbar />
    <Dashboard />
    <About />
    <BottomMenu />
  </Fragment>
);

export default IndexPage;
