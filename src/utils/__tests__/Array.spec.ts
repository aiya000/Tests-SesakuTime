import { test, expect } from 'vitest'
import { range } from '@/utils/Array'

test('elements of range with step 2 can be divide by 2', () => {
  expect(range(0, 10, 2)).toSatisfy((elements: Array<number>) => elements.every((x) => x % 2 === 0))
})

test('range includes the last value', () => {
  const end = 10
  expect(range(0, end)).toContain(end)
})

test('range with step 2 does not include the end number if if is an odd number', () => {
  const end = 3
  expect(range(0, end, 2)).not.toContain(end)
})
