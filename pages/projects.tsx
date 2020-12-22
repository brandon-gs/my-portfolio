import Head from "next/head";
import { BottomMenu, ListProjects, Navbar } from "components";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Brandon García</title>
      </Head>
      <Navbar />
      <ListProjects />
      <BottomMenu />
    </>
  );
}
