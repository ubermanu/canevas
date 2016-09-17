/**
 * Scene
 */
SILK.Scene = function () {

    SILK.Object2D.call(this);

    /** @type {string} */
    this.type = 'Scene';
};

/** @extends Object2D */
SILK.Scene.prototype = Object.create(SILK.Object2D.prototype);

/** @constructor */
SILK.Scene.prototype.constructor = SILK.Scene;