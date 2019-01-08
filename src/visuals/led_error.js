const PIXELS = [...Array(24)].map(() => ({ r: 0, g: 0, b: 0 }));

module.exports = {
  options: {
    fps     : 3,
    tfps    : 60,
    rpm     : 2,
  },
  frames: [
    PIXELS.map((x, i) => !(i % 4) ? { ...x, r: 255 } : x ),
    PIXELS,
  ],
}
