module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
      'import/resolver': {
        "alias": {
          "map": [['@', './src']],
          "extensions": ['.ts', '.tsx'],
        },
      },
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "sort-destructure-keys",
        "prettier"
    ],
    "rules": {
        'func-names': ['warn', 'as-needed'],
        'func-style': 'off',
        'no-nested-ternary': 'off',
        "react/react-in-jsx-scope": "off",
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-sort-props': 'error',
        'react/function-component-definition': 'off',
        'sort-destructure-keys/sort-destructure-keys': 'error',
        'prettier/prettier': [
          'error',
          {
            tabWidth: 2,
            trailingComma: 'es5',
            singleQuote: true,
            printWidth: 100,
          },
        ],
      },
}
