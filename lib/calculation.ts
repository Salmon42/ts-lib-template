// Dummy implementation

import { add } from "@/implementation/add"
import { div } from "@/implementation/div"
import { mul } from "@/implementation/mul"
import { sub } from "@/implementation/sub"

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
