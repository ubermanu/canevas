/**
 * PolygonShape
 */
SILK.PolygonShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'PolygonShape';

    /** @type {number} */
    this.faces = options.faces !== undefined ? options.faces : 3;

    /** @type {number} */
    this.radius = options.radius !== undefined ? options.radius : 1;

    // Build the points array from properties
    this.update();
};

/** @extends Shape */
SILK.PolygonShape.prototype = new SILK.Shape;

/** @constructor */
SILK.PolygonShape.prototype.constructor = SILK.PolygonShape;

/**
 * Update
 */
SILK.PolygonShape.prototype.update = function () {

    // Angle for each faces
    var anglePart = SILK.PI2 / this.faces;

    // Reset points
    this.points = [];

    // For each face, add a point
    for (var i = 0, l = this.faces; i < l; i++) {

        var corner = new SILK.Vector2(
                Math.cos(i * anglePart),
                Math.sin(i * anglePart))
            .multScalar(this.radius);

        this.points.push([corner.x, corner.y]);
    }
};