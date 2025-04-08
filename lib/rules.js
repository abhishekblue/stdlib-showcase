const rules = [
	{
		name: 'Math.random()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.object?.name === 'Math' &&
			node.callee.property?.name === 'random',
		suggestion: '@stdlib/random/base/mt19937',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/mt19937'
	},
	{
		name: 'Math.floor()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.object?.name === 'Math' &&
			node.callee.property?.name === 'floor',
		suggestion: '@stdlib/math/base/special/floor',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor'
	},
	{
		name: 'Math.ceil()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.object?.name === 'Math' &&
			node.callee.property?.name === 'ceil',
		suggestion: '@stdlib/math/base/special/ceil',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil'
	},
	{
		name: 'parseInt()',
		test: node =>
			node.callee?.type === 'Identifier' &&
			node.callee.name === 'parseInt',
		suggestion: '@stdlib/utils/parse-json',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/parse-json'
	},
	{
		name: 'isNaN()',
		test: node =>
			node.callee?.type === 'Identifier' &&
			node.callee.name === 'isNaN',
		suggestion: '@stdlib/assert/is-nan',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-nan'
	},
	{
		name: 'typeof x === "string"',
		test: node =>
			node.type === 'BinaryExpression' &&
			node.operator === '===' &&
			node.left?.type === 'UnaryExpression' &&
			node.left.operator === 'typeof' &&
			node.right?.type === 'Literal' &&
			node.right.value === 'string',
		suggestion: '@stdlib/assert/is-string',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-string'
	},
	{
		name: 'typeof x === "number"',
		test: node =>
			node.type === 'BinaryExpression' &&
			node.operator === '===' &&
			node.left?.type === 'UnaryExpression' &&
			node.left.operator === 'typeof' &&
			node.right?.type === 'Literal' &&
			node.right.value === 'number',
		suggestion: '@stdlib/assert/is-number',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-number'
	},
	{
		name: 'Array.isArray()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.object?.name === 'Array' &&
			node.callee.property?.name === 'isArray',
		suggestion: '@stdlib/assert/is-array',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/is-array'
	},
	{
		name: 'Object.keys()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.object?.name === 'Object' &&
			node.callee.property?.name === 'keys',
		suggestion: '@stdlib/utils/keys',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils/keys'
	},
	{
		name: 'Object.hasOwnProperty()',
		test: node =>
			node.callee?.type === 'MemberExpression' &&
			node.callee.property?.name === 'hasOwnProperty',
		suggestion: '@stdlib/assert/has-own-property',
		link: 'https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert/has-own-property'
	}
];

module.exports = rules;
