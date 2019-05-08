import { Camera } from "./Camera";
import { Scene } from "../objects/Scene";

/**
 * Canvas
 *
 * Create a canvas element in the dom
 * then renders a scene using a camera
 */
class Canvas {

  protected element = document.createElement('canvas');

  /** @type {CanvasRenderingContext2D} */
  protected context = this.element.getContext('2d');

  /** @type {boolean} */
  protected autoClear = true;

  /**
   * Resize the canvas and its container
   *
   * @param {number} width
   * @param {number} height
   */
  setSize(width, height) {
    this.element.width = width;
    this.element.height = height;
    this.element.style.width = width + 'px';
    this.element.style.height = height + 'px';
  }

  /**
   * Clear the canvas
   */
  clear() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
  }

  /**
   * Main render function
   *
   * @param {Scene} scene
   * @param {Camera} camera
   */
  render(scene, camera) {

    if (!(scene instanceof Scene)) {
      console.error('SILK.Canvas.render: scene is not an instance of SILK.Scene', scene);
      return;
    }

    if (!(camera instanceof Camera)) {
      console.error('SILK.Canvas.render: camera is not an instance of SILK.Camera', camera);
      return;
    }

    if (this.autoClear) this.clear();

    // Load camera context
    this.context.save();
    this.context.translate(camera.position.x, camera.position.y);
    this.context.rotate(camera.rotation);
    this.context.scale(camera.zoom, camera.zoom);

    // Render scene
    scene.render(this.context);

    // Restore camera context
    this.context.restore();
  }

  /**
   * Enable or disable smoothing
   *
   * @param {bool} smoothing
   */
  setSmoothing(smoothing) {
    this.context.imageSmoothingEnabled = smoothing;
  }
}

export { Canvas };
