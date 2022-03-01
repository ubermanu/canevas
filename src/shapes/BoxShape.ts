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

    // Build the points array from properties
    this.update()
  }

  update() {
    const w = this.width * 0.5
    const h = this.height * 0.5
    this.points = [
      [-w, -h],
      [-w, h],
      [w, h],
      [w, -h],
    ]
  }
}

export interface BoxShapeOptions {
  width: number
  height: number
}
