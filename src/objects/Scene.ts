import { Object2D } from '../core/Object2D'
import { Mesh } from './Mesh'

/**
 * Render a series of meshes.
 */
export class Scene extends Object2D {
  type: string = 'Scene'
  children: Mesh[] = []

  render(context: CanvasRenderingContext2D, children?: Mesh[]) {
    // Get scene children if not defined
    // This case is mostly the start of the loop
    children = children || this.children

    // Render scene objects using their own context
    // This will apply their position/rotation/scale
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].render(context)
      this.render(context, children[i].children)
    }
  }
}
