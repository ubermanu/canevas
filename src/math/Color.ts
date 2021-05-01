/**
 * Color
 */
export class Color {
  r: number = 1
  g: number = 1
  b: number = 1

  constructor(color: number) {
    this.setHex(color)
  }

  setHex(hex: number): Color {
    hex = Math.floor(hex)
    this.r = ((hex >> 16) & 255) / 255
    this.g = ((hex >> 8) & 255) / 255
    this.b = (hex & 255) / 255
    return this
  }

  setRGB(r: number, g: number, b: number): Color {
    this.r = r
    this.g = g
    this.b = b
    return this
  }

  getStyle(): string {
    const _r = (this.r * 255) | 0,
      _g = (this.g * 255) | 0,
      _b = (this.b * 255) | 0
    return 'rgb(' + _r + ',' + _g + ',' + _b + ')'
  }
}
