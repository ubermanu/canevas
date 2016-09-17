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
};

/** @constructor */
SILK.BoxShape.prototype.constructor = SILK.BoxShape;

/**
 * Render
 */
SILK.BoxShape.prototype.render = function (context) {

    var _w2 = this.width / 2,
        _h2 = this.height / 2;

    context.beginPath();

    context.moveTo(- _w2, - _h2);
    context.lineTo(- _w2, _h2);
    context.lineTo(_w2, _h2);
    context.lineTo(_w2, - _h2);

    context.closePath();
};