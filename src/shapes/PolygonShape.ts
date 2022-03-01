import { Shape } from '../core/Shape'
import { Vector2 } from '../math/Vector2'
import { PI2 } from '../math'

/**
 * A shape defined by an array of at least 2 vertices in local coordinates.
 */
export class PolygonShape extends Shape {
  type: string = 'PolygonShape'

  _faces: number = 3
  _radius: number = 1.0

  // Contains all the vertices of the shape.
  // This is a two-dimensional array for performances purposes.
  _points: number[][] = []

  constructor(options: PolygonShapeOptions = {}) {
    super()
    // FIXME: Avoid double update on init
    this.faces = options.faces ?? this._faces
    this.radius = options.radius ?? this._radius
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath()

    for (let i = 0, l = this._points.length; i < l; i++) {
      if (i === 0) {
        context.moveTo(this._points[i][0], this._points[i][1])
      } else {
        context.lineTo(this._points[i][0], this._points[i][1])
      }
    }

    context.closePath()
  }

  /**
   * Refreshes the polygon cache.
   * @protected
   */
  protected update() {
    const anglePart = PI2 / this._faces
    this._points = []

    for (let i = 0, l = this._faces; i < l; i++) {
      const corner = new Vector2(
        Math.cos(i * anglePart),
        Math.sin(i * anglePart)
      ).multScalar(this._radius)

      this._points.push([corner.x, corner.y])
    }
  }

  set faces(value: number) {
    if (value < 3) {
      throw new Error('Polygon must have at least 3 faces')
    }
    this._faces = value
    this.update()
  }

  get faces(): number {
    return this._faces
  }

  set radius(value: number) {
    if (value < 0) {
      throw new Error('Radius must be greater than 0')
    }
    this._radius = value
    this.update()
  }

  get radius(): number {
    return this._radius
  }
}

export interface PolygonShapeOptions {
  faces?: number
  radius?: number
}
