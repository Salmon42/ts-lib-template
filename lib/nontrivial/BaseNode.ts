import { BASE_SPECIFIER } from '@/constants/nodes'

/**
 * something something basenode
 */
export class BaseNode {

	private __classname: string

	constructor(
		public injection: string,
		public specifier: string = BASE_SPECIFIER
	) {
		this.__classname = this.constructor.name
	}

	logError(...messages: any[]) {
		console.log(`[${this.__classname}]`, messages)
	}

}