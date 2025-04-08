# stdlib-analyzer

It is a CLI tool that scans `Javascript` code and suggest replacements as per [`stdlib`](https://github.com/stdlib-js/stdlib) library for commonly used native JS functions.

<section class="about">

## What it does?

`stdlib-analyzer` analyzes Javascript(.js) files and finds built-in Javascript utilities like `Math.random()`, `Math.floor()`, `parseInt`, etc. and suggests `stdlib` based alternatives that are more robust, modular, Type-safe and can be used for Scientific and mathematical computing for better precision.

</section>


<section class="installation">

Clone this repository and install dependencies:

```bash
git clone https://github.com/<your-username>/stdlib-showcase
cd stdlib-analyzer
npm install
```

To use the tool globally:

```bash
npm link
```
</section>


<section class="usage">

## Usage

```bash
analyzer [options] <file1.js> [file2.js ...]
```

## CLI
### Options

| Flag          | Description |
| -----------   | ----------- |
| `--help, -h`  | Display usage instructions |
| `--summary`   | Print summary of detected utilities |

</section>

<section class="examples">

## Example

Given a file `test.js`:

```javascript
const value = Math.random();
const parsed = parseInt("17");
const check = isNaN("AJ");

if (typeof value === "string") {
  console.log("String");
}
```

Run the `analyzer`:
```bash
analyzer test.js --summary
```

Output:
```bash
[Line: 21 : Column: 14] Math.random()  -> Suggestion: @stdlib/random/base/mt19937 (https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/mt19937)
[Line: 22 : Column: 15] parseInt()  -> Suggestion: @stdlib/utils/parse-json (https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parse-json)
[Line: 23 : Column: 14] isNaN()  -> Suggestion: @stdlib/assert/is-nan (https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nan)
Summary:
- Math.random() : found 1 times.
- parseInt() : found 1 times.
- isNaN() : found 1 times.
```
</section>
