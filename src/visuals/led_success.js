const PIXELS = [...Array(24)].map(() => ({ r: 0, g: 0, b: 0 }));

module.exports = {
  options: {
    fps     : 1,
    tfps    : 60,
    rpm     : 15,
  },
  frames: [
    PIXELS.map((x, i) => (i % 4) === 0 ? { ...x, g: 255 } : x ),
  ],
}
