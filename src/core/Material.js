/**
 * Material
 *
 * A material defines the rendered object appearance and visuals
 * For example it can be a color, an image or an animated sprite
 */
SILK.Material = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'Material';

    /** @type {number} */
    this.opacity = options.opacity !== undefined ? options.opacity : 1.0;
};

/** @constructor */
SILK.Material.prototype.constructor = SILK.Material;

/**
 * Render
 *
 * @param context
 */
SILK.Material.prototype.render = function (context) {
    context.globalAlpha = this.opacity;
};