import { Material, MaterialOptions } from '../core/Material'

/**
 * ImageMaterial
 *
 * Renders a simple image into the rendering context
 */
export class ImageMaterial extends Material {
  type: string = 'ImageMaterial'

  clip: boolean = true
  image: HTMLImageElement = new Image()

  constructor(options: ImageMaterialOptions = {}) {
    super(options)

    if (options.clip !== undefined) {
      this.clip = options.clip
    }

    if (options.src !== undefined) {
      this.image.src = options.src
    }
  }

  /**
   * Render
   */
  render(context: CanvasRenderingContext2D) {
    // Call Material initial context rendering
    super.render(context)

    // Crop the image to fit in the shape
    if (this.clip) {
      context.clip()
    }

    // Render image in the center of the object
    // TODO: Add offset the properties?
    context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2)
  }
}

// ImageMaterial constructor options.
export interface ImageMaterialOptions extends MaterialOptions {
  clip?: boolean
  src?: string
}
