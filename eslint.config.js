import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser'; // Import TypeScript parser
import tsPlugin from '@typescript-eslint/eslint-plugin'; // Import TypeScript plugin

export default [
    {
        ignores: ['dist'], // Ignore the `dist` folder
    },
    {
        files: ['**/*.{js,jsx}'], // For JavaScript files
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules, // ESLint’s recommended rules for JavaScript
        },
    },
    {
        files: ['**/*.{ts,tsx}'], // For TypeScript files
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
            parser: tsParser, // Use the TypeScript parser
        },
        plugins: {
            '@typescript-eslint': tsPlugin, // Register the TypeScript plugin properly
            react,
            'react-hooks': reactHooks,
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules, // JavaScript recommended rules
            ...tsPlugin.configs.recommended.rules, // TypeScript recommended rules
            ...react.configs.recommended.rules, // React recommended rules
            ...reactHooks.configs.recommended.rules, // React Hooks recommended rules
            ...prettierConfig.rules, // Prettier formatting rules
            '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
            '@typescript-eslint/ban-ts-comment': 'warn', // Warn on TS comments
            'prettier/prettier': 'error', // Enforce Prettier formatting
            'react/react-in-jsx-scope': 'off', // Disable the outdated rule
            '@typescript-eslint/no-explicit-any': 'off',
            'react/no-unknown-property': [
                'error',
                {
                    ignore: [
                        'position', // Common properties for Three.js
                        'scale',
                        'rotation',
                        'args',
                        'attach',
                        'intensity'
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
            },
        },
    },
];
