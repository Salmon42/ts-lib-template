import { BaseNode } from './BaseNode'

/**
 * example node ifc
 */
export type IExampleNode = {
	doStuff(): void
}

/**
 * example node class
 */
export class ExampleNode extends BaseNode implements IExampleNode {
	constructor(
		public injection: string,
	) {
		super(injection, 'EXAMPLE')
	}

	doStuff(): void {
		this.logError('stuff', this.injection)
	}
}
