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