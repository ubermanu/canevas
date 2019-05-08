import { Shape } from "../core/Shape";

/**
 * BoxShape
 */
class BoxShape extends Shape {

  type: string = 'BoxShape';

  width: number = 0;
  height: number = 0;

  constructor(options: BoxShapeOptions = { width: 0, height: 0 }) {
    super();

    this.width = options.width;
    this.height = options.height;

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

// Constructor options.
interface BoxShapeOptions {
  width: number;
  height: number;
}

export { BoxShape, BoxShapeOptions };
