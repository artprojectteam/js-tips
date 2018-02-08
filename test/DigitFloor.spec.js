import assert from 'power-assert'
import DigitFloor from '../tips/DigitFloor'

describe('小数点以下任意桁数で切り捨て(DigitFloor)', () => {
  it('1000.12345 -> 小数点以下第2位まで', () => {
    const res = DigitFloor(1000.12345, 2)

    assert.equal(res, 1000.12)
  })

  it('1000.12 -> 小数点以下第3位指定時はそのまま返却', () => {
    const res = DigitFloor(1000.12, 3)

    assert.equal(res, 1000.12)
  })

  it('1000 -> 小数点以下がない場合はそのまま返却', () => {
    const res = DigitFloor(1000, 3)

    assert.equal(res, 1000)
  })
})