import { globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";

export default [
  globalIgnores([".astro/**", "dist/**", "node_modules/**"]),
  ...astro.configs.recommended,
];
