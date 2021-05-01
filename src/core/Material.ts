/**
 * Material
 *
 * A material defines the rendered object appearance and visuals
 * For example it can be a color, an image or an animated sprite
 */
export class Material {
  type = 'Material'
  opacity = 1.0

  constructor(options: MaterialOptions = {}) {
    if (options.opacity !== undefined) {
      this.opacity = options.opacity
    }
  }

  render(context: CanvasRenderingContext2D) {
    context.globalAlpha = this.opacity
  }
}

export interface MaterialOptions {
  opacity?: number
}
