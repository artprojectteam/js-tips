/**
 * オブジェクトサイズにフィットする画像サイズを計算
 * ex. 'background-size: cover'と同等
 * @param {number} w - 要素 or ブラウザのwidth
 * @param {number} h - 要素 or ブラウザのheight
 * @param {number} iw - 画像のwidth
 * @param {number} ih - 画像のheight
 * @return {{cw: number, ch: number, cx: number, cy: number}}
 */
export default (w, h, iw, ih) => {
  const ratioW = w / iw
  const ratioH = h / ih
  const scale = Math.max(ratioW, ratioH)
  const cw = iw * scale
  const ch = ih * scale

  return {
    cw: cw,
    ch: ch,
    cx: -((cw - w) / 2),
    cy: -((ch - h) / 2)
  }
}