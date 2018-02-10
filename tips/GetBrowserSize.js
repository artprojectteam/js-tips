/**
 * ブラウザサイズの取得
 */
export default class GetBrowserSize {
  /**
   * スクロールバーを含めない横幅
   * @return {number}
   */
  static innerWidth () {
    return document.documentElement.clientWidth
  }

  /**
   * スクロールバーを含めた横幅
   * @return {number}
   */
  static outerWidth () {
    return window.innerWidth
  }

  /**
   * デベロッパーツールなども含めたブラウザそのもののサイズ
   * @return {number}
   */
  static fullWidth () {
    return window.outerWidth
  }

  /**
   * スクロールバーを含めない高さ
   * @return {number}
   */
  static innerHeight () {
    return document.documentElement.clientHeight
  }

  /**
   * スクロールバーを含めた高さ
   * @return {number}
   */
  static outerHeight () {
    return window.innerHeight
  }

  /**
   * デベロッパーツールなども含めたブラウザそのものの高さ
   * @return {number}
   */
  static fullHeight () {
    return window.outerHeight
  }
}