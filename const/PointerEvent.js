const _ev = (() => {
  return {
    touch: typeof document.ontouchstart !== 'undefined',
    pointer: typeof window.PointerEvent !== 'undefined'
  }
})()

/**
 * クロスブラウザ対応クリック系イベント
 * @type {{DOWN: string, MOVE: string, UP: string, OVER: string, OUT: string}}
 */
export const POINTER = {
  DOWN: _ev.pointer ? 'pointerdown' :  _ev.touch ? 'touchstart' : 'mousedown',
  MOVE: _ev.pointer ? 'pointermove' : _ev.touch ? 'touchmove' : 'mousemove',
  UP: _ev.pointer ? 'pointerup' : _ev.touch ? 'touchend' : 'mouseup',
  OVER: _ev.pointer ? 'pointerover' : 'mouseover',
  OUT: _ev.pointer ? 'pointerout' : 'mouseout'
}