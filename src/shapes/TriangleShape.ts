import { PolygonShape } from './PolygonShape'

/**
 * A shape representing a single triangle.
 */
export class TriangleShape extends PolygonShape {
  type: string = 'TriangleShape'

  constructor(options: TriangleShapeOptions = {}) {
    super({ ...options, faces: 3 })
  }
}

export interface TriangleShapeOptions {
  radius?: number
}
