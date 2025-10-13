/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PrettierConfig & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@/types/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/helpers/(.*)$',
        '^@/utils/(.*)$',
        '^@/hooks/(.*)$',
        '^@/components/ui/(.*)$',
        '^@/components/(.*)$',
        '^@/styles/(.*)$',
        '^@/app/(.*)$',
        '',
        '^[./]',
    ],
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
}

export default config
