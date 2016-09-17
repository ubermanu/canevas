/**
 * Mesh
 *
 * A basic Object2D that handle its shape and its material
 *
 * @param {Shape} shape
 * @param {Material} material
 */
SILK.Mesh = function (shape, material) {

    SILK.Object2D.call(this);

    /** @type {string} */
    this.type = 'Mesh';

    /** @type {Shape} */
    this.shape = shape !== undefined ? shape : new SILK.Shape();

    /** @type {Material} */
    this.material = material !== undefined ? material : new SILK.BasicMaterial({ color: Math.random() * 0xffffff });
};

/** @extends Object2D */
SILK.Mesh.prototype = Object.create(SILK.Object2D.prototype);

/** @constructor */
SILK.Mesh.prototype.constructor = SILK.Mesh;

/**
 * Render
 */
SILK.Mesh.prototype.render = function (context) {

    // Limit rotation value to a whole 360
    this.rotation %= Math.PI * 2;

    if (this.visible) {

        context.save();

        // Apply its Object2D properties to the context
        context.scale(this.scale, this.scale);
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation);

        // Render shape and material
        this.shape.render(context);
        this.material.render(context);

        context.restore();
    }
};