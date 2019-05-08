Canvas Renderer
========

HTML5 Canvas renderer based on [THREE.js](https://github.com/mrdoob/three.js) format.

### Usage ###

```html
<script src="cc.min.js"></script>

<script>

    var canvas, scene, camera;
    var shape, material, mesh;

    init();
    animate();

    function init () {

        // Main renderer
        canvas = new cc.Canvas();
        canvas.setSize(window.innerWidth, window.innerHeight);

        // Contains all the meshes to render
        scene = new cc.Scene();

        // Will move into the scene
        camera = new cc.Camera();
        camera.position.set(window.innerWidth / 2, window.innerHeight / 2);

        // Mesh properties
        material = new cc.BasicMaterial({ wireframe: true, color: 0xff0000 });
        shape = new cc.BoxShape({ width: 80, height: 80 });

        // Add mesh to the scene
        mesh = new cc.Mesh(shape, material);
        scene.add(mesh);

        // Append canvas to the body
        document.body.appendChild(canvas.element);
    }

    function animate () {
        requestAnimationFrame(animate);
        mesh.rotation += 0.02;
        canvas.render(scene, camera);
    }

</script>
```

### Example ###

Here is a link to a [JSFiddle](https://jsfiddle.net/ubermanu/091b7k3x/)
