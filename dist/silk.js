/**
 * silk.js
 * @version 0.2.0
 * @author ubermanu
 * @url git://github.com/ubermanu/silk.js.git
 * @license MIT
 */

var SILK = {

    /** @const {string} */
    VERSION: '2',

    /** @const {number} */
    PI2: Math.PI * 2
};

// Uses "$$" as new namespace if not defined
var $$ = $$ || SILK;

/**
 * Color
 *
 * @param {number} color
 * @return {this}
 */
SILK.Color = function (color) {
    return this.setHex(color);
};

SILK.Color.prototype = {

    /** @constructor */
    constructor: SILK.Color,

    /** @type {number} */
    r: 1, g: 1, b: 1,

    setHex: function (hex) {
        hex = Math.floor(hex);
        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;
        return this;
    },

    setRGB: function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    },

    getStyle: function () {
        var _r = (this.r * 255) | 0,
            _g = (this.g * 255) | 0,
            _b = (this.b * 255) | 0;
        return 'rgb(' + _r + ',' + _g + ',' + _b + ')';
    }
};

/**
 * Vector2
 * https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js
 *
 * @param {number} x
 * @param {number} y
 * @return {this}
 */
SILK.Vector2 = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
    return this;
};

SILK.Vector2.prototype = {

    /** @constructor */
    constructor: SILK.Vector2,

    set: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    copy: function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    },

    clone: function () {
        return new SILK.Vector2(this.x, this.y);
    },

    add: function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    },

    addScalar: function (scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    },

    sub: function (v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    },

    subScalar: function (scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    },

    mult: function (v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    },

    multScalar: function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    },

    div: function (v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    },

    divScalar: function (scalar) {

        if (scalar == 0) return new SILK.Vector2();

        this.x /= scalar;
        this.y /= scalar;
        return this;
    },

    lengthSq: function () {
        return this.x * this.x + this.y * this.y;
    },

    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    normalize: function () {
        return this.divScalar(this.length());
    },

    limit: function (max) {

        if (this.length() > max) {
            this.normalize();
            this.multScalar(max);
        }

        return this;
    },

    distanceTo: function (v) {
        return Math.sqrt(this.distanceToSq(v));
    },

    distanceToSq: function (v) {
        var dx = this.x - v.x,
            dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
};

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

/**
 * Canvas
 *
 * Create a canvas element in the dom
 * then renders a scene using a camera
 */
SILK.Canvas = function () {

    console.log('SILK.Canvas', SILK.VERSION);

    var _canvas = document.createElement('canvas');

    /** @type {CanvasRenderingContext2D} */
    var _context = _canvas.getContext('2d');

    /** @type {Element} */
    this.domElement = _canvas;

    /** @type {boolean} */
    this.autoClear = true;

    /**
     * Resize the canvas and its container
     *
     * @param {number} width
     * @param {number} height
     */
    this.setSize = function (width, height) {
        _canvas.width = width;
        _canvas.height = height;
        _canvas.style.width = width + 'px';
        _canvas.style.height = height + 'px';
    };

    /**
     * Clear the canvas
     */
    this.clear = function () {
        _context.clearRect(0, 0, _canvas.width, _canvas.height);
    };

    /**
     * Main render function
     *
     * @param {Scene} scene
     * @param {Camera} camera
     */
    this.render = function (scene, camera) {

        if (!(scene instanceof SILK.Scene)) {
            console.error('SILK.Canvas.render: scene is not an instance of SILK.Scene', scene);
            return;
        }

        if (!(camera instanceof SILK.Camera)) {
            console.error('SILK.Canvas.render: camera is not an instance of SILK.Camera', camera);
            return;
        }

        if (this.autoClear) this.clear();

        // Load camera context
        _context.save();
        _context.translate(camera.position.x, camera.position.y);
        _context.rotate(camera.rotation);
        _context.scale(camera.zoom, camera.zoom);

        // Render scene
        scene.render(_context);

        // Restore camera context
        _context.restore();
    };

    /**
     * Enable or disable smoothing
     *
     * @param {bool} smoothing
     */
    this.setSmoothing = function (smoothing) {
        _context.imageSmoothingEnabled = smoothing;
    };
}

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

/**
 * Shape
 *
 * Should be rendered at position [0,0]
 * Then the context handles the position/rotation/scale
 * Contains an array of points position (not used by CircleShape though)
 */
SILK.Shape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'Shape';

    /** @type {Array.<Vector2>} */
    this.points = [];

    /** @type {boolean} */
    this.autoUpdate = false;
};

/** @constructor */
SILK.Shape.prototype.constructor = SILK.Shape;

/**
 * Update points
 */
SILK.Shape.prototype.update = Function.prototype;

/**
 * Render
 */
SILK.Shape.prototype.render = function (context) {

    // Update if needed
    if (this.autoUpdate) this.update();

    context.beginPath();

    // Draw the path through the points
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (i === 0) {
            context.moveTo(point[0], point[1]);
        } else {
            context.lineTo(point[0], point[1]);
        }
    }

    context.closePath();
};

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
SILK.BasicMaterial.prototype = new SILK.Material;

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
SILK.SpriteMaterial.prototype = new SILK.ImageMaterial;

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

/**
 * BoxShape
 */
SILK.BoxShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'BoxShape';

    /** @type {number} */
    this.width = options.width !== undefined ? options.width : 0;

    /** @type {number} */
    this.height = options.height !== undefined ? options.height : 0;

    // Build the points array from properties
    this.update();
};

/** @extends Shape */
SILK.BoxShape.prototype = new SILK.Shape;

/** @constructor */
SILK.BoxShape.prototype.constructor = SILK.BoxShape;

/**
 * Update
 */
SILK.BoxShape.prototype.update = function () {

    var w = this.width / 2,
        h = this.height / 2;

    this.points = [[-w, -h], [-w, h], [w, h], [w, -h]];
};

/**
 * CircleShape
 */
SILK.CircleShape = function (options) {

    options = options || {};

    /** @type {string} */
    this.type = 'CircleShape';

    /** @type {number} */
    this.radius = options.radius !== undefined ? options.radius : 0;
};

/** @extends Shape */
SILK.CircleShape.prototype = new SILK.Shape;

/** @constructor */
SILK.CircleShape.prototype.constructor = SILK.CircleShape;

/**
 * Render
 *
 * Since the CircleShape does not use points
 * Use a custom render function
 */
SILK.CircleShape.prototype.render = function (context) {
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.closePath();
};

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

/**
 * TriangleShape
 */
SILK.TriangleShape = function (options) {

    options = options || {};
    options.faces = 3;

    SILK.PolygonShape.call(this, options);

    /** @type {string} */
    this.type = 'TriangleShape';
};

/** @extends Shape */
SILK.TriangleShape.prototype = new SILK.PolygonShape;

/** @constructor */
SILK.TriangleShape.prototype.constructor = SILK.TriangleShape;

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
SILK.Mesh.prototype = new SILK.Object2D;

/** @constructor */
SILK.Mesh.prototype.constructor = SILK.Mesh;

/**
 * Render
 */
SILK.Mesh.prototype.render = function (context) {

    // Limit rotation value to a whole 360
    this.rotation %= SILK.PI2;

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