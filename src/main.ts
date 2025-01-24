import { calculation } from '@/implementation'
import { debug } from '#/func'

console.info('Hello src!')

debug({
	test: 'value',
	calculated: calculation(10, 10, '*'),
})
