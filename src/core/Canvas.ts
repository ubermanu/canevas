import { Camera } from "./Camera";
import { Scene } from "../objects/Scene";

/**
 * Canvas
 *
 * Create a canvas element in the dom
 * then renders a scene using a camera
 */
class Canvas {

  element: HTMLCanvasElement = document.createElement('canvas');
  autoClear: boolean = true;

  /**
   * Resize the canvas and its container
   *
   * @param {number} width
   * @param {number} height
   */
  setSize(width: number, height: number) {
    this.element.width = width;
    this.element.height = height;
    this.element.style.width = width + 'px';
    this.element.style.height = height + 'px';
  }

  /**
   * Clear the canvas
   */
  clear() {
    const context = this.element.getContext('2d');
    if (context) {
      context.clearRect(0, 0, this.element.width, this.element.height);
    }
  }

  /**
   * Main rendering function.
   *
   * @param {Scene} scene
   * @param {Camera} camera
   */
  render(scene: Scene, camera: Camera) {

    const context = this.element.getContext('2d');

    if (context === null) {
      return;
    }

    if (!(scene instanceof Scene)) {
      console.error('Canvas.render: scene is not an instance of Scene', scene);
      return;
    }

    if (!(camera instanceof Camera)) {
      console.error('Canvas.render: camera is not an instance of Camera', camera);
      return;
    }

    if (this.autoClear) this.clear();

    // Load camera context
    context.save();
    context.translate(camera.position.x, camera.position.y);
    context.rotate(camera.rotation);
    context.scale(camera.zoom, camera.zoom);

    // Render scene
    scene.render(context);

    // Restore camera context
    context.restore();
  }

  /**
   * Enable or disable smoothing.
   *
   * @param {boolean} smoothing
   */
  setSmoothing(smoothing: boolean) {
    const context = this.element.getContext('2d');
    if (context) {
      context.imageSmoothingEnabled = smoothing;
    }
  }
}

export { Canvas };
