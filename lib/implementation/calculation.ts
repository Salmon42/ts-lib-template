// Dummy implementation

import { add } from "./add"
import { div } from "./div"
import { mul } from "./mul"
import { sub } from "./sub"

type Operator = '+' | '-' | '*' | '/'

/**
 * Calculation docs
 * 
 * @param first - first operand
 * @param second - second operand
 * @param operator - our operator
 * @returns result
 */
export const calculation = (first: number, second: number, operator: Operator) => {
	switch (operator) {
		case "+": return add(first, second)
		case "-": return sub(first, second)
		case "*": return mul(first, second)
		case "/": return div(first, second)
	}
}
