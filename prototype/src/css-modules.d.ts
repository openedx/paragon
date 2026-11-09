declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Plain (non-module) CSS is imported for its side effects only. TypeScript 6
// (TS2882) requires a declaration for side-effect imports that have no types.
declare module '*.css';
