// ファジィ理論
export default class FuzzyLogic {
  /**
   * 右肩上がりの傾斜型メンバーシップ
   * @param value {number}
   * @param x0 {number}
   * @param x1 {number}
   * @return {number}
   * @constructor
   */
  static Grade (value, x0, x1) {
    if (value <= x0) return 0
    if (value >= x1) return 1

    const diff = x1 - x0
    return (value / diff) - (x0 / diff)
  }

  /**
   * 右肩下がりの逆傾斜型メンバーシップ
   * @param value {number}
   * @param x0 {number}
   * @param x1 {number}
   * @return {number}
   * @constructor
   */
  static ReverseGrade (value, x0, x1) {
    if (value <= x0) return 1
    if (value >= x1) return 0

    const diff = x1 - x0
    return (x1 / diff) - (value / diff)
  }
}
