silk.js
========
2D Canvas renderer based on [THREE.js](https://github.com/mrdoob/three.js) format

### Usage ###

```html
<script src="silk.min.js"></script>

<script>
	
	var canvas, scene, camera;
	var shape, material, mesh;
	
	init();
	animate();
	
	function init () {
		
		scene = new SILK.Scene();
		
		canvas = new SILK.Canvas();
		canvas.setSize( window.innerWidth, window.innerHeight );
		
		camera = new SILK.Camera();
		camera.position.set( window.innerWidth / 2, window.innerHeight / 2 );
		
		material = new SILK.BasicMaterial({ wireframe: true, color: 0xff0000 });
		shape = new SILK.BoxShape({ width: 80, height: 80 });
		
		mesh = new SILK.Mesh ( shape, material );
		scene.add( mesh );
		
		document.body.appendChild( canvas.domElement );
	}
	
	function animate () {
		
		requestAnimationFrame( animate );
		
		mesh.rotation += 0.02;
		
		canvas.render( scene, camera );
	}
	
</script>
```

You should see [this](http://g.recordit.co/zSlm2pmh2C.gif) in less blurry
