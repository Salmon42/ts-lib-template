import { BASE_SPECIFIER } from '@/constants/nodes'

/**
 * something something basenode
 */
export class BaseNode {
	private __classname: string

	constructor(
		public injection: string,
		public specifier: string = BASE_SPECIFIER,
	) {
		this.__classname = this.constructor.name
		this.injection = injection
		this.specifier = specifier
	}

	logError(...messages: any[]) {
		console.info(`[${this.__classname}]`, messages)
	}
}
