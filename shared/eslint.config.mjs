// @ts-check
import { defineConfig } from "eslint/config";
import baseConfig from "../eslint.base.mjs";

export default defineConfig([
  {
    ignores: ["dist/", "node_modules/"],
  },
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "error",
    },
  },
]);
