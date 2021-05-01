import { Vector2 } from '../math/Vector2'

/**
 * Object2D
 *
 * An object is an class that supports basic features
 * to exists in a 2D environment such as
 * - Parent/Child concept
 * - Position/Rotation/Scale
 * - Visibility
 */
export class Object2D {
  id: number = Object2DIdCount++
  type: string = 'Object2D'

  parent: Object2D | null = null
  children: Array<Object2D> = []

  position: Vector2 = new Vector2()
  rotation: number = 0
  scale: number = 1
  visible: boolean = true

  /**
   * @param options
   */
  constructor(options: Object2DOptions = {}) {
    this.position = options.position ?? this.position
    this.rotation = options.rotation ?? this.rotation
    this.scale = options.scale ?? this.scale
    this.visible = options.visible ?? this.visible
  }

  /**
   * Add an object to its children
   *
   * @param {Object2D} object
   * @return {this}
   */
  add(object: Object2D) {
    if (object.parent !== null) {
      object.parent.remove(object)
    }

    object.parent = this
    this.children.push(object)

    return this
  }

  /**
   * Remove an object to its children if it exists.
   *
   * @param {Object2D} object
   * @return {this}
   */
  remove(object: Object2D) {
    const index = this.children.indexOf(object)

    if (index !== -1) {
      object.parent = null
      this.children.splice(index, 1)
    }

    return this
  }
}

/**
 * Object2D constructor options.
 */
export interface Object2DOptions {
  position?: Vector2
  rotation?: number
  scale?: number
  visible?: boolean
}

/**
 * Unique ID counter.
 * TODO: Use uuid?
 */
let Object2DIdCount: number = 0
