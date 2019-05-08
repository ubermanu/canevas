import Vector2 from "../math/Vector2";

/**
 * Camera
 *
 * A camera gives a global position/rotation/scale for a scene.
 * So it creates a point of view.
 */
class Camera {

  /**
   * @type {number}
   */
  options: object;

  /**
   * @type {string}
   */
  type: string = 'camera';

  /**
   * @type {Vector2}
   */
  position: Vector2;

  /**
   * @type {number}
   */
  rotation: number = 0;

  /**
   * @type {number}
   */
  zoom: number = 1;

  constructor(options: object) {
    options = options || {};
  }
}

export default Camera;
