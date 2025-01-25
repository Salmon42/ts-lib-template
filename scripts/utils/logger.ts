//
// Terminal logger implementation
//


/** Red */
const R = '\x1b[31m'

/** Green */
const G = '\x1b[32m'

/** Blue */
const B = '\x1b[34m'

/** Yellow */
const Y = '\x1b[33m'

/** Cyan */
const C = '\x1b[96m'

/** None */
const N = '\x1b[0m'


const getLogTimestamp = () => {
	const d = new Date()
	return `${d.toTimeString().split(' ')[0]}${d.getMilliseconds()}`
}


// eslint-disable-next-line no-unused-vars
export type LoggerFunction = (...args: any[]) => void


/**
 * https://davidlozzi.com/2021/03/16/style-up-your-console-logs/
 *
 * @param tag - Label for the logs
 * @returns colored & styled command prompt / terminal logs
 */
export const useLogger = (tag: string) => {
	// ...

	const info: LoggerFunction = (...args) => {
		console.info(`[${getLogTimestamp()}] ${C}<${tag}>${N} ${B}(I)${N}`, ...args)
	}

	const success: LoggerFunction = (...args) => {
		console.info(`[${getLogTimestamp()}] ${C}<${tag}>${N} ${G}(S)${N}`, ...args)
	}

	const warn: LoggerFunction = (...args) => {
		console.warn(`[${getLogTimestamp()}] ${C}<${tag}>${N} ${Y}(W)${N}`, ...args)
	}

	const error: LoggerFunction = (...args) => {
		console.error(`[${getLogTimestamp()}] ${C}<${tag}>${N} ${R}(E)${N}`, ...args)
	}


	return {
		info,
		success,
		warn,
		error,
	}
}
