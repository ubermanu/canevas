import { Shape } from '../core/Shape'

/**
 * A shape representing a square.
 */
export class BoxShape extends Shape {
  type: string = 'BoxShape'

  width: number = 0
  height: number = 0

  constructor(options: BoxShapeOptions = { width: 0, height: 0 }) {
    super()
    this.width = options.width
    this.height = options.height
  }

  update() {
    // Do nothing
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.rect(-this.width * 0.5, -this.height * 0.5, this.width, this.height)
    ctx.closePath()
  }
}

export interface BoxShapeOptions {
  width: number
  height: number
}
