/**
 * TriangleShape
 */
SILK.TriangleShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'TriangleShape';

    /** @type {number} */
    this.radius = options.radius !== undefined ? options.radius : 0;

    // Build the points array from properties
    this.update();
};

/** @extends Shape */
SILK.TriangleShape.prototype = new SILK.Shape;

/** @constructor */
SILK.TriangleShape.prototype.constructor = SILK.TriangleShape;

/**
 * Update
 */
SILK.TriangleShape.prototype.update = function () {

    var toRadian = Math.PI / 180;

    var a = new SILK.Vector2(
        Math.cos(30 * toRadian),
        Math.sin(30 * toRadian))
        .multScalar(this.radius);

    var b = new SILK.Vector2(
        Math.cos(150 * toRadian),
        Math.sin(150 * toRadian))
        .multScalar(this.radius);

    var c = new SILK.Vector2(
        Math.cos(270 * toRadian),
        Math.sin(270 * toRadian))
        .multScalar(this.radius);

    this.points = [[a.x, a.y], [b.x, b.y], [c.x, c.y]];
};