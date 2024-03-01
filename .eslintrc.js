module.exports = {
  root: true,
  env: {
    node: true,
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    // add more generic rule sets here, such as:

    '@nuxtjs/eslint-config-typescript',
    // '@vue/typescript/recommended',
  ],

  rules: {
    // disable the rule for all files
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // "vue/max-attributes-per-line": "off",
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-tabs': 'off',
    semi: 'off',
    'arrow-parens': 'off',
    // not needed for vue 3
    'comma-dangle': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  },
  overrides: [
    // {
    //   // enable the rule specifically for TypeScript files
    //   files: ['*.ts', '*.tsx'],
    //   rules: {},
    // },
  ],
};
