/**
 * TriangleShape
 */
SILK.TriangleShape = function (options) {

    options = options || {};
    options.faces = 3;

    SILK.PolygonShape.call(this, options);

    /** @type {string} */
    this.type = 'TriangleShape';
};

/** @extends Shape */
SILK.TriangleShape.prototype = new SILK.PolygonShape;

/** @constructor */
SILK.TriangleShape.prototype.constructor = SILK.TriangleShape;