import { ImageMaterial } from "./ImageMaterial";

/**
 * SpriteMaterial
 *
 * Loop into multiple images to gives an animation
 */
class SpriteMaterial extends ImageMaterial {

  /** @type {string} */
  type = 'SpriteMaterial';

  /** @type {number} */
  frame = 1;

  /** @type {number} */
  duration = 1;

  /** @type {number} */
  x = 0;

  /** @type {number} */
  y = 0;

  /** @type {number} */
  width = 0;

  /** @type {number} */
  height = 0;

  /** @type {number} */
  length = 1;

  /** @type {boolean} */
  repeat = true;

  constructor(options) {
    super(options);
    this.frame = options.frame !== undefined ? options.frame : 1;
    this.duration = options.duration !== undefined ? options.duration : 1;
    this.x = options.x !== undefined ? options.x : 0;
    this.y = options.y !== undefined ? options.y : 0;
    this.width = options.width !== undefined ? options.width : 0;
    this.height = options.height !== undefined ? options.height : 0;
    this.length = options.length !== undefined ? options.length : 1;
    this.repeat = options.repeat !== undefined ? options.repeat : true;
  }
  /**
   * Render the part of an image depending on the frame counter
   */
  render(context) {

    // Call Material initial context rendering
    this.render.call(this, context);

    // Increase frame index (in the length range)
    this.frame += 1 / this.duration;
    this.frame %= this.length;

    // Render image in context
    context.drawImage(

      this.image,

      this.x + (this.frame | 0) * this.width,
      this.y,

      this.width,
      this.height,

      - this.width / 2,
      - this.height / 2,

      this.width,
      this.height
    );
  }
}

export { SpriteMaterial };
