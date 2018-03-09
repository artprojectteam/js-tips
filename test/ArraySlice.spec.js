import assert from 'power-assert'
import ArraySlice from '../tips/ArraySlice'

/**
 * 任意長の配列をカウントアップで作成
 * @param length {number}
 * @return {Array}
 */
const createNumberArray = (length) => {
  let arr = []
  for (let i = 1; i <= length; i++) {
    arr.push(i)
  }
  return arr
}

describe('配列をn個ずつ抜き出す(ArraySlice)', () => {
  it('配列(1〜10)から最初の3つ抜き出す', () => {
    const collection = new ArraySlice(createNumberArray(10), 3)
    assert.deepEqual(collection.get(), [1, 2, 3])
  })

  it('配列(1〜10)で最初に9個抜き出した後、残りの[10]が返ってくる', () => {
    const collection = new ArraySlice(createNumberArray(10), 9)
    let res = null
    while (collection.hasNext()) {
      res = collection.get()
    }
    assert.deepEqual(res, [10])
  })

  it('配列[1,2]で3個抜き出したときは[1,2]が返ってくる', () => {
    const collection = new ArraySlice(createNumberArray(2), 3)
    assert.deepEqual(collection.get(), [1, 2])
  })

  it('配列(1〜10)で2個ずつ抜き出す場合、最初のhasNextはtrue', () => {
    const collection = new ArraySlice(createNumberArray(10), 2)
    assert.equal(collection.hasNext(), true)
  })

  it('配列(1〜10)で10個抜き出したあとのhasNextはfalse', () => {
    const collection = new ArraySlice(createNumberArray(10), 10)
    // 一度抜き出す
    collection.get()

    assert.equal(collection.hasNext(), false)
  })

  it('配列が空の時、hasNextはfalse', () => {
    const collection = new ArraySlice([], 1)
    assert.equal(collection.hasNext(), false)
  })
})