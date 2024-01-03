const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    let ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
};
