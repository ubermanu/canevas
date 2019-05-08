import { Shape } from "../core/Shape";

/**
 * BoxShape
 */
class BoxShape extends Shape {

  /** @type {string} */
  type = 'BoxShape';

  /** @type {number} */
  width = 0;

  /** @type {number} */
  height = 0;

  constructor(options) {
    super();

    /** @type {number} */
    this.width = options.width !== undefined ? options.width : 0;

    /** @type {number} */
    this.height = options.height !== undefined ? options.height : 0;

    // Build the points array from properties
    this.update();
  }

  /**
   * Update
   */
  update() {
    const w = this.width / 2;
    const h = this.height / 2;
    this.points = [[-w, -h], [-w, h], [w, h], [w, -h]];
  }
}

export { BoxShape };
