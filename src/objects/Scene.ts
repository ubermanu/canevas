import { Object2D } from "../core/Object2D";
import { Mesh } from "./Mesh";

/**
 * Scene
 */
class Scene extends Object2D {

  type: string = 'Scene';

  /**
   * Render the scene meshes recursively.
   */
  render(context: CanvasRenderingContext2D, children: Mesh[] = []) {

    // Get scene children if not defined
    // This case is mostly the start of the loop
    children = children || this.children;

    // Render scene objects using their own context
    // This will apply their position/rotation/scale
    for (var i = 0, l = children.length; i < l; i++) {

      // Render the child
      children[i].render(context);

      // Render the child's children
      this.render(context, children[i].children);
    }
  }
}

export { Scene };
