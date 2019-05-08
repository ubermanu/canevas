/**
 * Shape
 *
 * Should be rendered at position [0,0]
 * Then the context handles the position/rotation/scale
 * Contains an array of points position (not used by CircleShape though)
 */
abstract class Shape {

  type = 'Shape';

  // Contains all the vertices of the shape.
  // This is a two dimentional array for performances purposes.
  points: number[][] = [];

  // Auto update dimensions if necessary.
  autoUpdate = false;

  // TODO: Implement this method here
  abstract update(): void;

  /**
   * Renders the points of the shape.
   */
  render(context: CanvasRenderingContext2D) {

    // Update if needed
    if (this.autoUpdate) this.update();

    context.beginPath();

    // Draw the path through the points
    for (var i = 0, l = this.points.length; i < l; i++) {
      let point = this.points[i];
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
