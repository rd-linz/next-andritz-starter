const externalBefore = ["react", "lodash", "prop-types", "path"];

const aliasFolders = [
  "apis",
  "common",
  "components",
  "layout",
  "mui",
  "providers",
  "utils",
];

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    ".pipelines",
    "node_modules",
    "public",
    "scripts",
    ".eslintrc.cjs",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    //"mui-path-imports",
    "eslint-plugin-import",
    "istanbul-ignore-preserve",
  ],
  rules: {
    "@typescript-eslint/object-curly-spacing": ["warn", "always"],
    "@typescript-eslint/semi": ["warn", "always"],
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    //"mui-path-imports/mui-path-imports": "warn",
    // https://medium.com/@diballesteros/how-to-quickly-configure-eslint-for-import-sorting-3a4017bd4853
    // https://dev.to/otamnitram/sorting-your-imports-correctly-in-react-213m
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          ...externalBefore.map((lib) => ({
            pattern: lib,
            group: "external",
            position: "before",
          })),
          ...aliasFolders.map((folder) => ({
            pattern: `@/${folder}`,
            group: "internal",
          })),
          ...aliasFolders.map((folder) => ({
            pattern: `@/${folder}/**`,
            group: "internal",
          })),
          { pattern: "@/**", group: "internal" },
          { pattern: "@/**/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "istanbul-ignore-preserve/preserve-keyword": "warn",
  },
};
