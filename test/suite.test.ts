import { fizzBuzz } from '../src/es/geekshubs/academy/kata1/geekshubs'

/* eslint-env jest */

describe('Testing', () => {
  /*
  test('Un test por aqui', () => {
    // Arrange

    // Act

    // Assert
    throw new Error('TODO')
  })

  test('Un test por alla', () => {
    // Arrange

    // Act

    // Assert
    throw new Error('TODO')
  })
  */

  test('Si no se le pasa nada, devuelve 0', () => {
    const returns = fizzBuzz()

    expect(returns).toBe('0')
  })

  test('Si se le pasa un 1, devuelve 1', () => {
    const returns = fizzBuzz(1)

    expect(returns).toBe('1')
  })

  test('Devuelve Fizz si el número es divisible entre 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(6)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
    expect(fizzBuzz(12)).toBe('Fizz')
    expect(fizzBuzz(18)).toBe('Fizz')
    expect(fizzBuzz(21)).toBe('Fizz')
    expect(fizzBuzz(333)).toBe('Fizz')
  })

  test('Devuelve Buzz si el número es divisible entre 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
    expect(fizzBuzz(20)).toBe('Buzz')
    expect(fizzBuzz(25)).toBe('Buzz')
    expect(fizzBuzz(50)).toBe('Buzz')
    expect(fizzBuzz(550)).toBe('Buzz')
  })

  test('Devuelve FizzBuzz si el número es divisible entre 3 y entre 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
    expect(fizzBuzz(60)).toBe('FizzBuzz')
    expect(fizzBuzz(90)).toBe('FizzBuzz')
    expect(fizzBuzz(555)).toBe('FizzBuzz')
  })
})

