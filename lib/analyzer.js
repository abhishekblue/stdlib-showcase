#!/usr/bin/env node

var fs = require( 'node:fs' );
var acornLoose = require( 'acorn-loose' );
var acornWalk = require( 'acorn-walk' );
var ARGV = require( '@stdlib/process/argv' );
var rules = require( './rules' );
var colors = require('./colors');

/* --------------------------------------------------------------------------------------
 CLI : --help */

const args = ARGV.slice(2);
const summary = {};
if (args.includes('--help') || args.includes('-h')) {
	console.log( colors.bold( 'Usage:'),`\n ${colors.cyan('node analyzer.js')} ${colors.yellow('<file1.js> [file2.js ...]')}
		Analyzes JavaScript files and suggests stdlib replacements for common native functions.
		Options:
		${colors.cyan('--help, -h')}	Show usage information
		${colors.cyan('--summary')}		Print summary of matched patterns at the end`);
	process.exit(0);
}

/* -------------------------------------------------------------------------------------- */

const filePaths = args.filter(arg => !arg.startsWith('--'));
if( filePaths.length == 0 ) {
	console.error(colors.error('No input file provided. Run', colors.cyan( '`analyzer --help`' ), 'for usage.'))
	process.exit(1);
}
for( const path of filePaths ){
	const userData = fs.readFileSync(path, 'utf-8');
	const ast = acornLoose.parse(userData, {ecmaVersion: 5, locations: true});

	acornWalk.simple(ast, { CallExpression(node) {
		for (const rule of rules) {
		if( rule.test(node) ) {
			const line = node.loc.start.line;
			const col = node.loc.start.column;

			console.log( colors.location( `[Line: ${line} : Column: ${col}]` ), colors.ruleName( rule.name ),' -> Suggestion:', colors.suggestion( rule.suggestion ), colors.count( `(${rule.link})` ) );
			( summary.hasOwnProperty(rule.name) ) ? summary[rule.name]++ : summary[rule.name] = 1;
			}}
		}}
	)
	if (args.includes('--summary')){
		console.log(colors.bold('Summary:'));
		for (const [key, value] of Object.entries(summary)) {
			console.log('-', colors.ruleName( key ), ': found', colors.suggestion.bold( value ), 'times.');
		}
	}
};

