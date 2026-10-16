// Vite's `?raw` import returns a module's source text as a string. Used to feed
// react-live the verbatim JSX authored in the co-located `*.examples.tsx` files.
declare module '*?raw' {
  const src: string;
  export default src;
}
