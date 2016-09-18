/**
 * Scene
 */
SILK.Scene = function () {

    SILK.Object2D.call(this);

    /** @type {string} */
    this.type = 'Scene';
};

/** @extends Object2D */
SILK.Scene.prototype = new SILK.Object2D;

/** @constructor */
SILK.Scene.prototype.constructor = SILK.Scene;

/**
 * Render the scene meshes recursively
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Array.<Mesh>} children
 */
SILK.Scene.prototype.render = function (context, children) {

    // Get scene children if not defined
    // This case is mostly the start of the loop
    children = children || this.children;

    // Render scene objects using their own context
    // This will apply their position/rotation/scale
    for (var i = 0, l = children.length; i < l; i++) {

        // Render the child
        children[i].render(context);

        // Render the child's children
        this.render(context, children[i].children);
    }
}