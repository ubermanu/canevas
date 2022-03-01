import { PolygonShape } from './PolygonShape'

/**
 * A shape representing a single triangle.
 */
export class TriangleShape extends PolygonShape {
  type: string = 'TriangleShape'

  faces: number = 3
}
