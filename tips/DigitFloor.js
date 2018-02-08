/**
 * 小数点以下の数値を任意の桁数で切り捨て
 * @param {number} num - 小数点以下の数値
 * @param {number} digit - 切り捨てたい小数点以下の桁数
 * @return {number}
 */
export default (num, digit) => {
  const pow = Math.pow(10, digit)
  const _n = Math.floor(num * pow)

  return _n / pow
}