import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import nodePlugin from 'eslint-plugin-node';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    plugins: {
      prettier: prettierPlugin,
      node: nodePlugin,
    },

    rules: {
      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      // Desabilitando regras específicas
      'spaced-comment': 'off',
      'no-console': 'off',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',

      // Regras personalizadas
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'req|res|next|val|err',
        },
      ],
    },

    settings: {
      node: {
        version: '22.14.0',
      },
    },
  },

  // Estende regras recomendadas do @eslint/js
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
  },
]);
