import { Object2D } from '../core/Object2D'
import { Shape } from '../core/Shape'
import { Material } from '../core/Material'

/**
 * Mesh
 *
 * A basic Object2D that handle its shape and its material
 */
export class Mesh extends Object2D {
  type = 'Mesh'

  children: Mesh[] = []

  shape: Shape
  material: Material

  constructor(shape: Shape, material: Material, options?: object) {
    super(options)
    this.shape = shape
    this.material = material
  }

  /**
   * Render the mesh shape and material in its own context.
   * Restore the default context afterwards.
   */
  render(context: CanvasRenderingContext2D) {
    // Limit rotation value to a whole 360
    this.rotation %= Math.PI / 2

    if (this.visible) {
      context.save()

      // Apply its Object2D properties to the context
      context.scale(this.scale, this.scale)
      context.translate(this.position.x, this.position.y)
      context.rotate(this.rotation)

      // Render shape and material
      this.shape.render(context)
      this.material.render(context)

      context.restore()
    }
  }
}
