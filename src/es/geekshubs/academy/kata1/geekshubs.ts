const FIZZ = 'Fizz'
const BUZZ = 'Buzz'

/**
 * kata FizzBuzz
 */
export function fizzBuzz (n: number = 0): string {
  if (n === 0) return '0'
  if (n % 3 === 0) return n % 5 === 0 ? FIZZ + BUZZ : FIZZ
  if (n % 5 === 0) return BUZZ
  return `${n}`
}
