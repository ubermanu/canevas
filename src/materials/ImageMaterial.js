/**
 * ImageMaterial
 *
 * Renders a simple image into the rendering context
 */
SILK.ImageMaterial = function (options) {

    SILK.Material.call(this, options);

    options = options || {};

    /** @type {string} */
    this.type = 'ImageMaterial';

    /** @type {boolean} */
    this.clip = options.clip !== undefined ? options.clip : true;

    /** @type {Element} */
    this.image = document.createElement('img');

    /** @type {string} */
    this.image.src = options.src !== undefined ? options.src : '';
};

/** @extends Material */
SILK.ImageMaterial.prototype = new SILK.Material;

/** @constructor */
SILK.ImageMaterial.prototype.constructor = SILK.ImageMaterial;

/**
 * Render
 */
SILK.ImageMaterial.prototype.render = function (context) {

    // Call Material initial context rendering
    SILK.Material.prototype.render.call(this, context);

    // Crop the image to fit in the shape
    if (this.clip) context.clip();

    // Render image in the center of the object
    // TODO: Add offset the properties?
    context.drawImage(this.image, - this.image.width / 2, - this.image.height / 2);
};