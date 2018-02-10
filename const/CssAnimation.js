/**
 * CSS animation event (keyframe, transition) name
 * @type {{START: string, END: string}}
 */
export const CSS_ANIMATION = {
  // 開始
  START: 'animationstart webkitAnimationStart transitionstart webkitTransitionStart',

  // 繰り返しに入った
  ITERATION: 'animationiteration webkitAnimationIteration',

  // 中断(firefox only)
  CANCEL: 'animationcancel webkitAnimationCancel',

  // 終了
  END: 'animationend webkitAnimationEnd transitionend webkitTransitionEnd'
}