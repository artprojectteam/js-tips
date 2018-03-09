/**
 * 配列をn個ずつ抜き出す
 * 連想配列は処理できない
 */
export default class ArraySlice {
  /**
   * @param collection {array} - 配列
   * @param every {number} - n個(1以上の正数)
   */
  constructor (collection, every) {
    this._count = 0
    this._collection = collection
    this._every = every
  }

  /**
   * 配列の抜き出し
   * @return {T[]}
   */
  get () {
    const index = this._every * this._count
    this._count++
    return this._collection.slice(index, index + this._every)
  }

  /**
   * 次の抜き出す配列が存在するか
   * @return {boolean}
   */
  hasNext () {
    const index = this._every * this._count
    return this._collection.slice(index, index + this._every).length > 0
  }
}