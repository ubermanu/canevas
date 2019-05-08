/**
 * Color
 *
 * @param {number} color
 * @return {this}
 */
class Color {

  r = 1;
  g = 1;
  b = 1;

  constructor(color) {
    this.setHex(color);
  }

  setHex(hex) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    return this;
  }

  setRGB(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  }

  getStyle() {
    var _r = (this.r * 255) | 0,
      _g = (this.g * 255) | 0,
      _b = (this.b * 255) | 0;
    return 'rgb(' + _r + ',' + _g + ',' + _b + ')';
  }
}

export default Color;
