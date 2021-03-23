declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}
