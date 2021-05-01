import { PolygonShape } from './PolygonShape'

/**
 * TriangleShape
 *
 * This polygon must have 3 faces.
 */
export class TriangleShape extends PolygonShape {
  type: string = 'TriangleShape'

  faces: number = 3
}
