import Object2D from "../core/Object2D";
import BasicMaterial from "../materials/BasicMaterial";

/**
 * Mesh
 *
 * A basic Object2D that handle its shape and its material
 *
 * @param {Shape} shape
 * @param {Material} material
 */
class Mesh extends Object2D {

  /** @type {string} */
  type = 'Mesh';

  // /** @type {Shape} */
  shape;

  // /** @type {Material} */
  material;

  constructor(shape, material, options = {}) {
    super(options);

    /** @type {Shape} */
    this.shape = shape;

    /** @type {Material} */
    this.material = material !== undefined ? material : new BasicMaterial({ color: Math.random() * 0xffffff });
  }

  /**
   * Render
   */
  render = function (context) {

    // Limit rotation value to a whole 360
    this.rotation %= Math.PI / 2;

    if (this.visible) {

      context.save();

      // Apply its Object2D properties to the context
      context.scale(this.scale, this.scale);
      context.translate(this.position.x, this.position.y);
      context.rotate(this.rotation);

      // Render shape and material
      this.shape.render(context);
      this.material.render(context);

      context.restore();
    }
  }
}

export default Mesh;
