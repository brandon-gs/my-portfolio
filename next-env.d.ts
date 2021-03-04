/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="./interfaces" />

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "next-page-transitions" {
  import { PageTransition as NextPageTransition } from "next-page-transitions";
  export const PageTransition = NextPageTransition;
}
