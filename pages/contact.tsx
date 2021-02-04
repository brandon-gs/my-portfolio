import { BottomMenu, Navbar } from "components";
import { FormContact } from "components/Contact-Page";

export default function Contact(): JSX.Element {
  return (
    <>
      <Navbar />
      <FormContact />
      <BottomMenu />
    </>
  );
}
