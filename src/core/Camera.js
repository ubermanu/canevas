/**
 * Camera
 *
 * A camera gives a global position/rotation/scale for a scene
 * So it creates a point of view
 */
SILK.Camera = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'Camera';

    /** @type {Vector2} */
    this.position = options.position !== undefined ? options.position : new SILK.Vector2();

    /** @type {number} */
    this.rotation = options.rotation !== undefined ? options.rotation : 0;

    /** @type {number} */
    this.zoom = options.zoom !== undefined ? options.zoom : 1;
};

/** @constructor */
SILK.Camera.prototype.constructor = SILK.Camera;