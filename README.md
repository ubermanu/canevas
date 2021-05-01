# Canevas

HTML Canvas renderer based on [THREE.js](https://github.com/mrdoob/three.js).

## Example

```js
import { BasicMaterial, BoxShape, Camera, Canvas, Mesh, Scene } from "dist/canevas.mjs";

let canvas, scene, camera;
let shape, material, mesh;

init();
animate();

function init() {

    // Main renderer
    canvas = new Canvas();
    canvas.setSize(window.innerWidth, window.innerHeight);

    // Contains all the meshes to render
    scene = new Scene();

    // Will move into the scene
    camera = new Camera();
    camera.position.set(window.innerWidth / 2, window.innerHeight / 2);

    // Mesh properties
    material = new BasicMaterial({ wireframe: true, color: 0xff0000 });
    shape = new BoxShape({ width: 80, height: 80 });

    // Add mesh to the scene
    mesh = new Mesh(shape, material);
    scene.add(mesh);

    // Append canvas to the body
    document.body.appendChild(canvas.element);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation += 0.02;
    canvas.render(scene, camera);
}
```
