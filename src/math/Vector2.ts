/**
 * Vector2
 */
export class Vector2 {
  x: number = 0
  y: number = 0

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  set(x: number, y: number): Vector2 {
    this.x = x
    this.y = y
    return this
  }

  copy(v: Vector2): Vector2 {
    this.x = v.x
    this.y = v.y
    return this
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y)
  }

  add(v: Vector2): Vector2 {
    this.x += v.x
    this.y += v.y
    return this
  }

  addScalar(scalar: number): Vector2 {
    this.x += scalar
    this.y += scalar
    return this
  }

  sub(v: Vector2): Vector2 {
    this.x -= v.x
    this.y -= v.y
    return this
  }

  subScalar(scalar: number): Vector2 {
    this.x -= scalar
    this.y -= scalar
    return this
  }

  mult(v: Vector2): Vector2 {
    this.x *= v.x
    this.y *= v.y
    return this
  }

  multScalar(scalar: number): Vector2 {
    this.x *= scalar
    this.y *= scalar
    return this
  }

  div(v: Vector2): Vector2 {
    this.x /= v.x
    this.y /= v.y
    return this
  }

  divScalar(scalar: number): Vector2 {
    if (scalar === 0) {
      return new Vector2(0, 0)
    }

    this.x /= scalar
    this.y /= scalar
    return this
  }

  lengthSq(): number {
    return this.x * this.x + this.y * this.y
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  normalize(): Vector2 {
    return this.divScalar(this.length())
  }

  limit(max: number): Vector2 {
    if (this.length() > max) {
      this.normalize()
      this.multScalar(max)
    }

    return this
  }

  distanceTo(v: Vector2): number {
    return Math.sqrt(this.distanceToSq(v))
  }

  distanceToSq(v: Vector2): number {
    const dx = this.x - v.x,
      dy = this.y - v.y
    return dx * dx + dy * dy
  }
}
