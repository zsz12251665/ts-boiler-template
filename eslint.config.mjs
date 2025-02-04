import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  configPrettier,
];
