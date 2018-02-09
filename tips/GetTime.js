/**
 * 精度の高いタイムスタンプの取得(5マイクロ秒精度のミリ秒)
 * 利用できない場合は従来のDate関数で返却
 *
 * @return {Performance | number | number}
 */
export default () => {
  return (performance && performance.now()) || Date.now()
}