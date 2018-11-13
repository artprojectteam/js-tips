/**
 * ファイルサイズを適切な単位に変換
 * @param {number} size
 * @return {*}
 */
export default (size) => {
  const { target, unit } = getTarget(size)

  const newSize = target !== null ? Math.floor((size / target) * Math.pow(10, 2)) / Math.pow(10, 2) : size

  return newSize + unit
}

/**
 * 入力されたファイルサイズを元に計算につかうバイト数と単位を返却
 * @param {number} size
 * @return {{target, unit}}
 */
function getTarget (size) {
  const kb = 1024
  const mb = Math.pow(kb, 2)
  const gb = Math.pow(kb, 3)
  const tb = Math.pow(kb, 4)

  const returnData = (target, unit) => ({ target, unit })

  if (size >= tb) {
    return returnData(tb, 'TB')
  } else if (size >= gb) {
    return returnData(gb, 'GB')
  } else if (size >= mb) {
    return returnData(mb, 'MB')
  } else if (size >= kb) {
    return returnData(kb, 'KB')
  } else {
    return returnData(null, 'byte')
  }
}