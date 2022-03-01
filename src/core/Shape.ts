export abstract class Shape {
  type = 'Shape'

  /**
   * Render the shape.
   */
  abstract render(context: CanvasRenderingContext2D): void
}
