/** @type {import("prettier").Config} */
export default {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	printWidth: 120,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-tailwindcss']
};
