/**
 * Wheel Event
 * preventDefaultは処理をする直前で行う(トラックパッドなので従来の機能も動作しなくなるため)
 *
 * @browser IE 9+, Chrome 31+, Firefox 17+, Safari 8+
 */
document.addEventListener('wheel', (e) => {
  const delta = -e.deltaY

  if (delta < 0) {
    // 下にスクロールした時
    e.preventDefault()
  } else if (delta > 0) {
    // 上にスクロールした時
    e.preventDefault()
  }
}, false)