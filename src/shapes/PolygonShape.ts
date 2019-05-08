import { Shape } from "../core/Shape";
import { Vector2 } from "../math/Vector2";

/**
 * PolygonShape
 */
class PolygonShape extends Shape {

  type: string = 'PolygonShape';

  faces: number = 3;
  radius: number = 1;

  constructor(options: PolygonShapeOptions) {
    super();

    if (options.faces !== undefined) {
      this.faces = options.faces;
    }

    if (options.radius !== undefined) {
      this.radius = options.radius;
    }

    // Build the points array from properties
    this.update();
  }

  // Update points
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

// PolygonShape constructor options
interface PolygonShapeOptions {
  faces?: number;
  radius?: number;
}

export { PolygonShape, PolygonShapeOptions };
