import { ImageMaterial, ImageMaterialOptions } from './ImageMaterial'

/**
 * SpriteMaterial
 *
 * Loop into multiple images to gives an animation
 */
export class SpriteMaterial extends ImageMaterial {
  type: string = 'SpriteMaterial'

  frame: number = 1
  duration: number = 1

  x: number = 0
  y: number = 0
  width: number = 0
  height: number = 0
  length: number = 1

  repeat: boolean = true

  constructor(options: SpriteMaterialOptions = {}) {
    super(options)

    if (options.frame !== undefined) {
      this.frame = options.frame
    }

    if (options.duration !== undefined) {
      this.duration = options.duration
    }

    if (options.x !== undefined) {
      this.x = options.x
    }

    if (options.y !== undefined) {
      this.y = options.y
    }

    if (options.width !== undefined) {
      this.width = options.width
    }

    if (options.height !== undefined) {
      this.height = options.height
    }

    if (options.length !== undefined) {
      this.length = options.length
    }

    if (options.repeat !== undefined) {
      this.repeat = options.repeat
    }
  }

  /**
   * Render the part of an image depending on the frame counter
   */
  render(context: CanvasRenderingContext2D) {
    // Call Material initial context rendering
    super.render(context)

    // Increase frame index (in the length range)
    this.frame += 1 / this.duration
    this.frame %= this.length

    // Render image in context
    context.drawImage(
      this.image,

      this.x + (this.frame | 0) * this.width,
      this.y,

      this.width,
      this.height,

      -this.width / 2,
      -this.height / 2,

      this.width,
      this.height
    )
  }
}

// SpriteMaterial constructor options.
export interface SpriteMaterialOptions extends ImageMaterialOptions {
  frame?: number
  duration?: number
  x?: number
  y?: number
  width?: number
  height?: number
  length?: number
  repeat?: boolean
}
