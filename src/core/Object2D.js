/**
 * Object2D
 *
 * An object is an class that supports basic features
 * to exists in a 2D environment such as
 * - Parent/Child concept
 * - Position/Rotation/Scale
 * - Visibility
 */
SILK.Object2D = function (options) {

    Object.defineProperty(this, 'id', { value: SILK.Object2DIdCount++ });

    options = options || {};

    /** @type {string} */
    this.type = 'Object2D';

    /** @type {Object2D} */
    this.parent = null;

    /** @type {Array.<Object2D>} */
    this.children = [];

    /** @type {Vector2} */
    this.position = options.position !== undefined ? options.position : new SILK.Vector2();

    /** @type {number} */
    this.rotation = options.rotation !== undefined ? options.rotation : 0;

    /** @type {number} */
    this.scale = options.scale !== undefined ? options.scale : 1;

    /** @type {boolean} */
    this.visible = options.visible !== undefined ? options.visible : true;
};

/** @constructor */
SILK.Object2D.prototype.constructor = SILK.Object2D;

/**
 * Add an object to its children
 *
 * @param {Object2D} object
 * @return {this}
 */
SILK.Object2D.prototype.add = function (object) {

    if (object instanceof SILK.Object2D) {

        if (object.parent !== null) {
            object.parent.remove(object);
        }

        object.parent = this;
        this.children.push(object);

    } else {
        console.error('SILK.Object2D.add: object is not an instance of SILK.Object2D', object);
    }

    return this;
};

/**
 * Remove an object to its children if it exists
 *
 * @param {Object2D} object
 * @return {this}
 */
SILK.Object2D.prototype.remove = function (object) {

    var index = this.children.indexOf(object);

    if (index !== - 1) {
        object.parent = null;
        this.children.splice(index, 1);
    }

    return this;
};

/** @const {number} */
SILK.Object2DIdCount = 0;