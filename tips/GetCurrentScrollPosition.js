/**
 * 現在のスクロール位置
 * @return {number}
 */
export default () => {
  return document.scrollingElement.scrollTop || document.body.scrollTop || document.documentElement.scrollTop
}