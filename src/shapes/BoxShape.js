/**
 * BoxShape
 */
SILK.BoxShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'BoxShape';

    /** @type {number} */
    this.width = options.width !== undefined ? options.width : 0;

    /** @type {number} */
    this.height = options.height !== undefined ? options.height : 0;

    // Build the points array from properties
    this.update();
};

/** @extends Shape */
SILK.BoxShape.prototype = new SILK.Shape;

/** @constructor */
SILK.BoxShape.prototype.constructor = SILK.BoxShape;

/**
 * Update
 */
SILK.BoxShape.prototype.update = function () {

    var w = this.width / 2,
        h = this.height / 2;

    this.points = [[-w, -h], [-w, h], [w, h], [w, -h]];
};