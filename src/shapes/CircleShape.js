/**
 * CircleShape
 */
SILK.CircleShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'CircleShape';

    /** @type {number} */
    this.radius = options.radius !== undefined ? options.radius : 0;
};

/** @constructor */
SILK.CircleShape.prototype.constructor = SILK.CircleShape;

/**
 * Render
 */
SILK.CircleShape.prototype.render = function (context) {
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.closePath();
};
