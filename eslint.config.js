import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    },
  },
  pluginJs.configs.recommended,  
];