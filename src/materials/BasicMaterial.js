/**
 * BasicMaterial
 *
 * Material that can render lines
 * or plain content of an Object2D
 */
SILK.BasicMaterial = function (options) {

    SILK.Material.call(this, options);

    options = options || {};

    /** @type {string} */
    this.type = 'BasicMaterial';

    /** @type {boolean} */
    this.wireframe = options.wireframe !== undefined ? options.wireframe : false;

    /** @type {number} */
    var _color = options.color !== undefined ? options.color : 0x000000;

    /** @type {Color} */
    this.color = new SILK.Color(_color);
};

/** @extends Material */
SILK.BasicMaterial.prototype = Object.create(SILK.Material.prototype);

/** @constructor */
SILK.BasicMaterial.prototype.constructor = SILK.BasicMaterial;

/**
 * Render
 */
SILK.BasicMaterial.prototype.render = function (context) {

    // Call Material initial context rendering
    SILK.Material.prototype.render.call(this, context);

    if (this.wireframe) {
        context.strokeStyle = this.color.getStyle();
        context.stroke();
    } else {
        context.fillStyle = this.color.getStyle();
        context.fill();
    }
};