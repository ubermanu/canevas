/**
 * Vector2
 * https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js
 *
 * @param {number} x
 * @param {number} y
 * @return {this}
 */
class Vector2 {

  x;
  y;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  addScalar(scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  subScalar(scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  }

  mult(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  multScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  div(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  divScalar(scalar) {

    if (scalar == 0) return new Vector2();

    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    return this.divScalar(this.length());
  }

  limit(max) {

    if (this.length() > max) {
      this.normalize();
      this.multScalar(max);
    }

    return this;
  }

  distanceTo(v) {
    return Math.sqrt(this.distanceToSq(v));
  }

  distanceToSq(v) {
    var dx = this.x - v.x,
      dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
}

export default Vector2;
