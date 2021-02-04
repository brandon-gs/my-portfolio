/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="./interfaces" />

declare module "*.svg" {
  const content: any;
  export default content;
}
