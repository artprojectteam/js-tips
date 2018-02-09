/**
 * default option(using Popup function)
 * @type {{width: number, height: number, personalbar: number, toolbar: number, scrollbars: number, resizable: number}}
 */
const ops = {
  width: 500,
  height: 450,
  personalbar: 0,
  toolbar: 0,
  scrollbars: 1,
  resizable: 1
}

/**
 * popup window
 *
 * @example
 * import Popup from './Popup'
 *
 * // use default
 * const popup = Popup('http://tech.artprojectteam.jp')
 *
 * // use custom
 * const popup2 = Popup('http://tech.artprojectteam.jp', 'sns', {width: 1000, height: 600}, 'abc=1,cdf=0')
 *
 *
 * @param {string} url
 * @param {string} [name = 'popup'] - window name
 * @param {object} [option = {}] - opsで必要なデータのみ変更 ex. {width:400}
 * @param {string} [other = ''] - ex. 'abc=0,cdf=1'
 * @return {Window | null}
 */
export default (url, name = 'popup', option = {}, other = '') => {
  const obj = Object.assign(ops, option)
  const arr = []

  Object.keys(obj).forEach((key) => {
    arr.push(`${key}=${obj[key]}`)
  })

  let features = arr.join(',')
  if (other !== '') features += `,${other}` // 初期設定の他に

  return window.open(url, name, features)
}