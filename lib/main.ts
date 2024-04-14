import { add, sub, mul, div, calculation } from '@/implementation'
import { BASE_SPECIFIER, Constants } from '@/constants'
import { libraryPlugin } from '@/plugin'
import { BaseNode, ExampleNode, IExampleNode } from '@/nontrivial'
import { ExampleData, SomeGenericType } from '@/types'


// Trying to trigger ESLint
// const x = 1
// console.log('ayy');


export {
	calculation,
	add,
	div,
	mul,
	sub,

	BaseNode,
	ExampleNode,

	ExampleData,

	libraryPlugin,

	Constants,
	BASE_SPECIFIER,
}

export type {
	IExampleNode,
	SomeGenericType,
}
