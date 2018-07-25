/**
 * ページャロジック
 * @example
 * const pager = new Pager(10, 5, 1, false)
 * const list = pager.list() // list = [1, 2, 3, 4, 5]
 * const prev = pager.prev() // prev = -1
 * const next = pager.next() // next = 2
 * const showFirst = pager.showFirst() // showFirst = false
 * const showLast = pager.showLast() // showLast = true
 */
export default class Pager {
  /**
   * @param {number} total - 総ページ数
   * @param {number} display - 1ページに表示する数
   * @param {number} current - 現在のページ
   * @param {boolean} [isCenter = true] カレントページを中央にする (falseの場合はカレントページが左端)
   * @constructor
   */
  constructor (total, display, current, isCenter = true) {
    // 総ページ数が表示個数より小さい場合は総ページ数を上限とする
    this._display = total < display ? total : display
    this._total = total
    this._current = current

    this._error = this._checkError()
    if (this._error.flg) {
      const msg = []
      Object.keys(this._error.msg).forEach((key) => {
        const m = this._error.msg[key]
        if (m !== '') msg.push(m)
      })
      console.error(msg.join(`\n`))
    }

    this._list = this._numberList(isCenter)
  }

  /**
   * ページリスト
   * @return {number[]}
   */
  list () {
    return this._list
  }

  /**
   * 前のページ番号
   * -1の場合は前のページなし
   * @return {number}
   */
  prev () {
    if (this._error.flg) return -1
    return this._current > 1 ? this._current - 1 : -1
  }

  /**
   * 次のページ番号
   * -1の場合は次のページなし
   * @return {number}
   */
  next () {
    if (this._error.flg) return -1
    return this._current < this._total ? this._current + 1 : -1
  }

  /**
   * 1ページ目が表示可能
   * @return {boolean}
   */
  showFirst () {
    if (this._error.flg) return false
    return this._list.every((page) => page > 1)
  }

  /**
   * 最後のページが表示可能
   * @return {boolean}
   */
  showLast () {
    if (this._error.flg) return false
    return this._list.every((page) => page < this._total)
  }

  /**
   * 正常な値が渡ってきているかのチェック
   * 個別に判断する場合はmsg[key]が空かどうかで判断
   * @return {{flg: boolean, msg: {total: string, display: string, current: string}}}
   * @private
   */
  _checkError () {
    let flg = false

    const msg = {
      total: '',
      display: '',
      current: ''
    }

    if (this._total < 1) {
      flg = true
      msg.total = '総ページ数が1未満です'
    }

    if (this._display < 1) {
      flg = true
      msg.display = '表示リスト数が1未満です'
    }

    if (this._current < 1) {
      flg = true
      msg.current = '現在のページが1未満です'
    } else if (this._current > this._total) {
      flg = true
      msg.current = '現在のページが総ページ数を超えています'
    }

    return { flg, msg }
  }

  /**
   * ページリスト
   * @param {boolean} isCenter
   * @return {number[]}
   * @private
   */
  _numberList (isCenter) {
    if (this._current < 1) return []

    const start = this._startNumber(isCenter)
    const list = []

    for (let i = 0; i < this._display; i++) {
      list.push(start + i)
    }

    return list
  }

  /**
   * リスト開始の数値
   * @param {boolean} isCenter
   * @return {number}
   * @private
   */
  _startNumber (isCenter) {
    // displayはlength扱いなので-1をした予測合計値
    const prediction = this._current + (this._display - 1)

    // 総ページ数を超える場合は、超えた分だけマイナス
    if (prediction > this._total) return this._current + (this._total - prediction)

    // 左端が常にカレントの場合は現在のカレント
    if (isCenter === false) return this._current

    /* カレントページが中央の場合 */
    const centerIndex = Math.floor(this._display / 2) // 中心となるindex

    // カレント値が中央より少ない場合は1からスタート
    if (this._current <= (centerIndex + 1)) return 1

    return this._current - centerIndex
  }
}