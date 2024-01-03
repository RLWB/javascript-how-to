/**
 * @function throttle
 * @param {function} fn
 * @param {number} delay
 */
const throttle = (fn, delay) => {
  let timer;
  return (...args) => {
    let ctx = this;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(ctx, agrs);
      timer = null;
    }, delay);
  };
};
