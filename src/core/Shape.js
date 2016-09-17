/**
 * Shape
 *
 * Should be rendered at position [0,0]
 * Then the context handles the position/rotation/scale
 */
SILK.Shape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'Shape';
};

/** @constructor */
SILK.Shape.prototype.constructor = SILK.Shape;

/**
 * Render
 */
SILK.Shape.prototype.constructor.render = null;