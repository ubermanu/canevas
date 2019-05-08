import PolygonShape from "./PolygonShape";

/**
 * TriangleShape
 */
class TriangleShape extends PolygonShape {

  /** @type {string} */
  type = 'TriangleShape';

  constructor(options) {
    super(options);
    this.faces = 3;
  }
}

export default TriangleShape;
