/**
 * SpriteMaterial
 *
 * Loop into multiple images to gives an animation
 */
SILK.SpriteMaterial = function (options) {

    SILK.ImageMaterial.call(this, options);

    options = options || {};

    /** @type {string} */
    this.type = 'SpriteMaterial';

    /** @type {number} */
    this.frame = options.frame !== undefined ? options.frame : 1;

    /** @type {number} */
    this.duration = options.duration !== undefined ? options.duration : 1;

    /** @type {number} */
    this.x = options.x !== undefined ? options.x : 0;

    /** @type {number} */
    this.y = options.y !== undefined ? options.y : 0;

    /** @type {number} */
    this.width = options.width !== undefined ? options.width : 0;

    /** @type {number} */
    this.height = options.height !== undefined ? options.height : 0;

    /** @type {number} */
    this.length = options.length !== undefined ? options.length : 1;

    /** @type {boolean} */
    this.repeat = options.repeat !== undefined ? options.repeat : true;
};

/** @extends ImageMaterial */
SILK.SpriteMaterial.prototype = Object.create(SILK.ImageMaterial.prototype);

/** @constructor */
SILK.SpriteMaterial.prototype.constructor = SILK.SpriteMaterial;

/**
 * Render the part of an image depending on the frame counter
 */
SILK.SpriteMaterial.prototype.render = function (context) {

    // Call Material initial context rendering
    SILK.Material.prototype.render.call(this, context);

    // Increase frame index (in the length range)
    this.frame += 1 / this.duration;
    this.frame %= this.length;

    // Render image in context
    context.drawImage(

        this.image,

        this.x + (this.frame | 0) * this.width,
        this.y,

        this.width,
        this.height,

        - this.width / 2,
        - this.height / 2,

        this.width,
        this.height
    );
};