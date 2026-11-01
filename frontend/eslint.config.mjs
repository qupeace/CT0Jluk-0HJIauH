// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      complexity: ["warn", 10],
      "max-lines-per-function": ["warn", 60],
      "max-params": ["warn", 4],
      "max-depth": ["warn", 3],
      eqeqeq: "error",
      "no-console": "warn",
    },
  }
);
