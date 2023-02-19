# Computercraft Types for TypescriptToLua

![](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge) ![](https://img.shields.io/github/package-json/v/Lisixo/cc-types?style=for-the-badge) ![](https://img.shields.io/badge/Written%20with-Typescript-blue?style=for-the-badge)

This package created for `typescript-to-lua` to create programs for Computercraft

# Installation
1. Add package to your project
```bash
npm install --save @lisixo/cc-types
```
2. Add types to `tsconfig.json`
```diff
{
  "compilerOptions": {
+   "types": [
+     "@typescript-to-lua/language-extensions",
+     "@lisixo/cc-types"
+   ]
  }
}
```

# Progress
You can watch implemented definitions and modules [here](PROGRESS.md)