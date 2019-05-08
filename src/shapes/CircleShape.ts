import Shape from "../core/Shape";

/**
 * CircleShape
 */
class CircleShape extends Shape {

  /** @type {string} */
  type = 'CircleShape';

  /** @type {number} */
  radius = 0;

  constructor(options) {
    super();
    this.radius = options.radius !== undefined ? options.radius : 0;
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
  render = function (context) {
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.closePath();
  }
}

export default CircleShape;
