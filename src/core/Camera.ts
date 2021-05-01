import { Vector2 } from '../math/Vector2'

/**
 * Camera
 *
 * A camera gives a global position/rotation/scale for a scene.
 * So it creates a point of view.
 */
export class Camera {
  type: string = 'camera'

  position: Vector2 = new Vector2()
  rotation: number = 0
  zoom: number = 1

  constructor(options?: object) {
    // TODO: Use options to set properties
  }
}
