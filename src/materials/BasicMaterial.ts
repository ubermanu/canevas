import { Material, MaterialOptions } from '../core/Material'
import { Color } from '../math/Color'

/**
 * Material that can render lines or faces of a mesh.
 *
 * ```js
 *  const material = new BasicMaterial({ color: 0xFF0000, wireframe: true, opacity: 0.5 });
 *  ```
 */
export class BasicMaterial extends Material {
  type: string = 'BasicMaterial'

  wireframe: boolean = false
  color: Color = new Color(0x000000)

  constructor(options: BasicMaterialOptions = {}) {
    super(options)
    this.wireframe = options.wireframe ?? this.wireframe
    this.color = options.color ? new Color(options.color) : this.color
  }

  render(context: CanvasRenderingContext2D) {
    super.render(context)

    if (this.wireframe) {
      context.strokeStyle = this.color.getStyle()
      context.stroke()
    } else {
      context.fillStyle = this.color.getStyle()
      context.fill()
    }
  }
}

export interface BasicMaterialOptions extends MaterialOptions {
  wireframe?: boolean
  color?: number
}
