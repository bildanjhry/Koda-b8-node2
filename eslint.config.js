import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, extends: ["js/recommended"], 
    languageOptions: { globals: globals.node },
    rules: {
      semi: ["error", "always"],
      indent:["error", 2],
      "no-unused-vars": "warn",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-use-before-define": ["error", {
        "functions": true,
        "classes": true,
        "variables": true,
        "allowNamedExports": false,
        "enums": true,
        "typedefs": true,
        "ignoreTypeReferences": true
      }],
    } 
  },
]);
