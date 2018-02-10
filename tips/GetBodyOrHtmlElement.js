/**
 * ウインドウスクロール要素の返却
 * ※Chrome 61からdocument.bodyではなくdocument.scrollingElementに変更された
 * @return {*}
 */
export default () => {
  if ('scrollingElement' in document) {
    return document.scrollingElement
  }

  // Fallback for legacy browsers
  if (navigator.userAgent.toLocaleLowerCase().indexOf('webKit') > -1) {
    return document.body
  }

  return document.documentElement
}