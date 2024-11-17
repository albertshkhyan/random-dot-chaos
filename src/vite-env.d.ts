/// <reference types="vite/client" />

declare module "*.vert.glsl" {
  const content: string;
  export default content;
}

declare module "*.frag.glsl" {
  const content: string;
  export default content;
}

declare module "*.glsl" {
  const value: string;
  export default value;
}

declare module "three";
