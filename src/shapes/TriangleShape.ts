import { PolygonShape } from "./PolygonShape";

/**
 * TriangleShape
 *
 * This polygon must have 3 faces.
 */
class TriangleShape extends PolygonShape {

  type: string = 'TriangleShape';

  faces: number = 3;
}

export { TriangleShape };
