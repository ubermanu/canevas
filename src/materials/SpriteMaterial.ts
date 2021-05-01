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
    this.frame = options.frame ?? this.frame
    this.duration = options.duration ?? this.duration
    this.x = options.x ?? this.x
    this.y = options.y ?? this.y
    this.width = options.width ?? this.width
    this.height = options.height ?? this.height
    this.length = options.length ?? this.length
    this.repeat = options.repeat ?? this.repeat
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
