import Shape from "../core/Shape";
import Vector2 from "../math/Vector2";

/**
 * PolygonShape
 */
class PolygonShape extends Shape {

  /** @type {string} */
  type = 'PolygonShape';

  /** @type {number} */
  faces = 3;

  /** @type {number} */
  radius = 1;

  constructor(options) {
    super();
    this.faces = options.faces !== undefined ? options.faces : 3;
    this.radius = options.radius !== undefined ? options.radius : 1;

    // Build the points array from properties
    this.update();
  }

  /**
   * Update
   */
  update() {

    // Angle for each faces
    var anglePart = (Math.PI / 2) / this.faces;

    // Reset points
    this.points = [];

    // For each face, add a point
    for (var i = 0, l = this.faces; i < l; i++) {

      var corner = new Vector2(
        Math.cos(i * anglePart),
        Math.sin(i * anglePart))
        .multScalar(this.radius);

      this.points.push([corner.x, corner.y]);
    }
  }
}

export default PolygonShape;
