import { Material, MaterialOptions } from '../core/Material'

/**
 * Create a material from an image.
 *
 * ```js
 *  const material = new ImageMaterial({ src: 'image.png', clip: true, opacity: 1.0 });
 *  ```
 */
export class ImageMaterial extends Material {
  type: string = 'ImageMaterial'

  clip: boolean = true
  image: HTMLImageElement = new Image()

  constructor(options: ImageMaterialOptions = {}) {
    super(options)
    this.clip = options.clip ?? this.clip
    this.image.src = options.src ?? this.image.src
  }

  render(context: CanvasRenderingContext2D) {
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

export interface ImageMaterialOptions extends MaterialOptions {
  clip?: boolean
  src?: string
}
