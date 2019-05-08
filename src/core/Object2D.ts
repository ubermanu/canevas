import { Vector2 } from "../math/Vector2";

/**
 * Object2D
 *
 * An object is an class that supports basic features
 * to exists in a 2D environment such as
 * - Parent/Child concept
 * - Position/Rotation/Scale
 * - Visibility
 */
class Object2D {

  id = Object2DIdCount++;

  /** @type {string} */
  type = 'Object2D';

  /** @type {Object2D} */
  parent = null;

  /** @type {Array.<Object2D>} */
  children = [];

  /** @type {Vector2} */
  position;

  /** @type {number} */
  rotation;

  /** @type {number} */
  scale;

  /** @type {boolean} */
  visible;

  constructor(options) {

    /** @type {Vector2} */
    this.position = options.position !== undefined ? options.position : new Vector2();

    /** @type {number} */
    this.rotation = options.rotation !== undefined ? options.rotation : 0;

    /** @type {number} */
    this.scale = options.scale !== undefined ? options.scale : 1;

    /** @type {boolean} */
    this.visible = options.visible !== undefined ? options.visible : true;
  }

  /**
   * Add an object to its children
   *
   * @param {Object2D} object
   * @return {this}
   */
  add(object) {

    if (object instanceof Object2D) {

      if (object.parent !== null) {
        object.parent.remove(object);
      }

      object.parent = this;
      this.children.push(object);

    } else {
      console.error('SILK.Object2D.add: object is not an instance of SILK.Object2D', object);
    }

    return this;
  }

  /**
   * Remove an object to its children if it exists
   *
   * @param {Object2D} object
   * @return {this}
   */
  remove(object) {

    var index = this.children.indexOf(object);

    if (index !== - 1) {
      object.parent = null;
      this.children.splice(index, 1);
    }

    return this;
  }
}

/** @const {number} */
let Object2DIdCount = 0;

export { Object2D };
