import { Material, MaterialOptions } from '../core/Material'
import { Color } from '../math/Color'

/**
 * BasicMaterial
 *
 * Material that can render lines
 * or plain content of an Object2D
 */
export class BasicMaterial extends Material {
  type: string = 'BasicMaterial'

  wireframe: boolean = false
  color: Color = new Color(0x000000)

  constructor(options: BasicMaterialOptions = {}) {
    super(options)
    this.wireframe = options.wireframe ?? this.wireframe
    this.color = new Color(options.color) ?? this.color
  }

  /**
   * Render
   */
  render(context: CanvasRenderingContext2D) {
    // Call Material initial context rendering
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

// BasicMaterial constructor options.
export interface BasicMaterialOptions extends MaterialOptions {
  wireframe?: boolean
  color?: number
}
