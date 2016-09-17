/**
 * TriangleShape
 */
SILK.TriangleShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'TriangleShape';

    /** @type {number} */
    this.radius = options.radius !== undefined ? options.radius : 0;
};

/** @constructor */
SILK.TriangleShape.prototype.constructor = SILK.TriangleShape;

/**
 * Render
 */
SILK.TriangleShape.prototype.render = function (context) {

    var toRadian = Math.PI / 180;

    var _a = new SILK.Vector2(
        Math.cos(30 * toRadian),
        Math.sin(30 * toRadian))
        .multScalar(this.radius);

    var _b = new SILK.Vector2(
        Math.cos(150 * toRadian),
        Math.sin(150 * toRadian))
        .multScalar(this.radius);

    var _c = new SILK.Vector2(
        Math.cos(270 * toRadian),
        Math.sin(270 * toRadian))
        .multScalar(this.radius);

    context.beginPath();

    context.moveTo(_a.x, _a.y);
    context.lineTo(_b.x, _b.y);
    context.lineTo(_c.x, _c.y);

    context.closePath();
};