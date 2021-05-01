import { Shape } from '../core/Shape'
import { Vector2 } from '../math/Vector2'

/**
 * PolygonShape
 */
export class PolygonShape extends Shape {
  type: string = 'PolygonShape'

  faces: number = 3
  radius: number = 1

  constructor(options: PolygonShapeOptions) {
    super()
    this.faces = options.faces ?? this.faces
    this.radius = options.radius ?? this.radius

    // Build the points array from properties
    this.update()
  }

  // Update points
  update() {
    // Angle for each faces
    const anglePart = Math.PI / 2 / this.faces

    // Reset points
    this.points = []

    // For each face, add a point
    for (let i = 0, l = this.faces; i < l; i++) {
      const corner = new Vector2(
        Math.cos(i * anglePart),
        Math.sin(i * anglePart)
      ).multScalar(this.radius)

      this.points.push([corner.x, corner.y])
    }
  }
}

// PolygonShape constructor options
export interface PolygonShapeOptions {
  faces?: number
  radius?: number
}
