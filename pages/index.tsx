import { Fragment } from "react";
import Head from "next/head";
import { Navbar, Dashboard, About, BottomMenu } from "components";

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Brandon García</title>
      <meta
        name="keywords"
        content="brandon, brandon garcia, brandongs, frontend developer, backend developer, freelance, software engineering, software engineering projects, create web apps, create mobile apps, create software"
      />
      <meta
        name="description"
        content="My name is Brandon, I am a computer systems engineering and I can help you to create your dream website, a scalable REST API or the best mobile app. If you are looking for a frontend developer, backend developer or mobile app developer, get in touch with me"
      />
    </Head>
    <Navbar />
    <Dashboard />
    <About />
    <BottomMenu />
  </Fragment>
);

export default IndexPage;
