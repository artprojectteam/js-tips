import assert from 'power-assert'
import CalcFitting from '../tips/CalcFitting'

describe('CalcFitting', () => {
  it('要素(5:3) | 画像(16:9)', () => {
    const res = CalcFitting(1200, 720, 1920, 1080)

    assert.deepEqual(res, {
      cw: 1280,
      ch: 720,
      cx: -40,
      cy: -0
    })
  })
})