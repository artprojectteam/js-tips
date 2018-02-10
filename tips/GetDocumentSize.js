/**
 * ドキュメント(body)のサイズ
 */
export default class GetDocumentSize {
  /**
   * <body>の横幅
   * @return {number}
   */
  static width () {
    return document.body.clientWidth
  }

  /**
   * <body>の縦幅(コンテンツの高さ)
   * @return {number}
   */
  static height () {
    return document.body.clientHeight
  }
}