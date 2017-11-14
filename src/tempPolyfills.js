global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

const raf = global.requestAnimationFrame;

export default raf;
