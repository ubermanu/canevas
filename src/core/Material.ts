/**
 * Material
 *
 * A material defines the rendered object appearance and visuals
 * For example it can be a color, an image or an animated sprite
 */
class Material {

  /** @type {string} */
  type = 'Material';

  /** @type {number} */
  opacity = 1.0;

  constructor(options) {
    if (options.opacity !== undefined) {
      this.opacity = options.opacity;
    }
  }

  render(context) {
    context.globalAlpha = this.opacity;
  }
}

export { Material };
