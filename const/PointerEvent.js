const _ev = (() => {
  return {
    touch: typeof document.ontouchstart !== 'undefined',
    pointer: window.navigator.pointerEnabled,
    msPointer: window.navigator.msPointerEnabled
  }
})()

/**
 * クロスブラウザ対応クリックイベント
 * ※WindowsのタッチPC対応
 * @type {{START: string, MOVE: string, END: string}}
 */
export const POINTER = {
  START: _ev.pointer ? 'pointerdown' : _ev.msPointer ? 'MSPointerDown' : _ev.touch ? 'touchstart' : 'mousedown',
  MOVE: _ev.pointer ? 'pointermove' : _ev.msPointer ? 'MSPointerMove' : _ev.touch ? 'touchmove' : 'mousemove',
  END: _ev.pointer ? 'pointerup' : _ev.msPointer ? 'MSPointerUp' : _ev.touch ? 'touchend' : 'mouseup'
}