import { Shape } from "../core/Shape";

/**
 * CircleShape
 */
class CircleShape extends Shape {

  type: string = 'CircleShape';

  radius: number = 0;

  constructor(options: { radius?: number } = {}) {
    super();

    if (options.radius !== undefined) {
      this.radius = options.radius
    }
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

export { CircleShape };
