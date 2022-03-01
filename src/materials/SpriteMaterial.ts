import { ImageMaterial, ImageMaterialOptions } from './ImageMaterial'
import { Material } from '../core/Material'

/**
 * Loop into multiple images to give an animation.
 *
 * ```js
 * const material = new SpriteMaterial({
 *   src: 'sprite.png',
 *   frameStart: 0,
 *   frameCount: 4,
 *   frameRate: 1,
 *   frameSize: [16, 16],
 *   frameOffset: [0, 0],
 *   loop: true
 * })
 * ```
 */
export class SpriteMaterial extends ImageMaterial {
  type: string = 'SpriteMaterial'

  frameStart: number = 1
  frameCount: number = 1
  frameRate: number = 1
  frameSize: number[] = [1, 1]
  frameOffset: number[] = [0, 0]

  loop: boolean = true

  constructor(options: SpriteMaterialOptions = {}) {
    super(options)
    this.frameStart = options.frameStart ?? this.frameStart
    this.frameCount = options.frameCount ?? this.frameCount
    this.frameRate = options.frameRate ?? this.frameRate
    this.frameSize = options.frameSize ?? this.frameSize
    this.frameOffset = options.frameOffset ?? this.frameOffset
    this.loop = options.loop ?? this.loop
  }

  // TODO: Add direction
  render(context: CanvasRenderingContext2D) {
    Material.prototype.render.call(this, context)

    // Increase frame index (in the length range)
    this.frameStart += 1 / this.frameRate
    this.frameStart %= this.frameCount

    const x = this.frameOffset[0]
    const y = this.frameOffset[1]
    const width = this.frameSize[0]
    const height = this.frameSize[1]

    context.drawImage(
      this.image,
      x + (this.frameStart | 0) * width,
      y,
      width,
      height,
      width * -0.5,
      height * -0.5,
      width,
      height
    )
  }
}

export interface SpriteMaterialOptions extends ImageMaterialOptions {
  frameStart?: number
  frameSize?: [number, number]
  frameCount?: number
  frameRate?: number
  frameOffset?: [number, number]
  loop?: boolean
}
