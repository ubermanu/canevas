import { Shape } from "../core/Shape";

/**
 * CircleShape
 */
class CircleShape extends Shape {

  type: string = 'CircleShape';

  radius: number;

  constructor(options: CircleShapeOptions = { radius: 1 }) {
    super();
    this.radius = options.radius
  }

  update() {
    // Do nothing
  }

  /**
   * Render
   *
   * Since the CircleShape does not use points
   * Use a custom render function
   */
  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.closePath();
  }
}

// CircleShape constructor options.
interface CircleShapeOptions {
  radius: number;
}

export { CircleShape, CircleShapeOptions };
