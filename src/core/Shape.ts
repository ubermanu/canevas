/**
 * Shape
 *
 * Should be rendered at position [0,0]
 * Then the context handles the position/rotation/scale
 * Contains an array of points position (not used by CircleShape though)
 */
abstract class Shape {

  /** @type {string} */
  type = 'Shape';

  /** @type {Array.<Vector2>} */
  points = [];

  /** @type {boolean} */
  autoUpdate = false;

  abstract update();

  render(context) {

    // Update if needed
    if (this.autoUpdate) this.update();

    context.beginPath();

    // Draw the path through the points
    for (var i = 0, l = this.points.length; i < l; i++) {
      var point = this.points[i];
      if (i === 0) {
        context.moveTo(point[0], point[1]);
      } else {
        context.lineTo(point[0], point[1]);
      }
    }

    context.closePath();
  }
}

export { Shape };
