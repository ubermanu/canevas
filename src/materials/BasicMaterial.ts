import { Material } from "../core/Material";
import { Color } from "../math/Color";

/**
 * BasicMaterial
 *
 * Material that can render lines
 * or plain content of an Object2D
 */
class BasicMaterial extends Material {

  /** @type {string} */
  type = 'BasicMaterial';

  /** @type {boolean} */
  wireframe = false;

  /** @type {Color} */
  color;

  constructor(options) {
    super(options);
    this.wireframe = options.wireframe !== undefined ? options.wireframe : false;
    this.color = new Color(options.color !== undefined ? options.color : 0x000000);
  }

  /**
   * Render
   */
  render(context) {

    // Call Material initial context rendering
    this.render.call(this, context);

    if (this.wireframe) {
      context.strokeStyle = this.color.getStyle();
      context.stroke();
    } else {
      context.fillStyle = this.color.getStyle();
      context.fill();
    }
  }
}

export { BasicMaterial };
