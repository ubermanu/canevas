import { PolygonShape } from './PolygonShape'

/**
 * A shape representing a single triangle.
 */
export class TriangleShape extends PolygonShape {
  type: string = 'TriangleShape'

  constructor(options: TriangleShapeOptions = {}) {
    super({ ...options, faces: 3 })
  }

  set faces(value: number) {
    if (value !== 3) {
      throw new Error('TriangleShape can only have 3 faces.')
    }
    this._faces = value
  }
}

export interface TriangleShapeOptions {
  radius?: number
}
