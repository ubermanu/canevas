import { Material } from "../core/Material";

/**
 * ImageMaterial
 *
 * Renders a simple image into the rendering context
 */
class ImageMaterial extends Material {

  /** @type {string} */
  type = 'ImageMaterial';

  /** @type {boolean} */
  clip = true;

  /** @type {Element} */
  image = document.createElement('img');

  constructor(options) {
    super(options);
    this.clip = options.clip !== undefined ? options.clip : true;
    this.image.src = options.src !== undefined ? options.src : '';
  }

  /**
   * Render
   */
  render(context) {

    // Call Material initial context rendering
    this.render.call(this, context);

    // Crop the image to fit in the shape
    if (this.clip) context.clip();

    // Render image in the center of the object
    // TODO: Add offset the properties?
    context.drawImage(this.image, - this.image.width / 2, - this.image.height / 2);
  }
}

export { ImageMaterial };
