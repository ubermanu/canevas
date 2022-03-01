import { Shape } from '../core/Shape'
import { PI2 } from '../math'

/**
 * A shape representing a circle.
 */
export class CircleShape extends Shape {
  type: string = 'CircleShape'

  radius: number = 1.0

  constructor(options: CircleShapeOptions = {}) {
    super()
    this.radius = options.radius ?? this.radius
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(0, 0, this.radius, 0, PI2)
    context.closePath()
  }
}

export interface CircleShapeOptions {
  radius?: number
}
