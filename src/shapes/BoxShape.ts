import { Shape } from '../core/Shape'

/**
 * A shape representing a square.
 */
export class BoxShape extends Shape {
  type: string = 'BoxShape'

  width: number = 1.0
  height: number = 1.0

  constructor(options: BoxShapeOptions = {}) {
    super()
    this.width = options.width ?? this.width
    this.height = options.height ?? this.height
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.rect(-this.width * 0.5, -this.height * 0.5, this.width, this.height)
    context.closePath()
  }
}

export interface BoxShapeOptions {
  width?: number
  height?: number
}
