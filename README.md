silk.js
========
Canvas renderer based on THREE.js code format

### Usage ###

```html
<script src="silk.min.js"></script>

<script>
	
	var canvas, scene, camera;
	var square;
	
	init();
	animate();
	
	function init () {
		
		canvas = new SILK.Canvas();
		canvas.setSize( window.innerWidth, window.innerHeight );
		
		camera = new SILK.Camera();
		camera.position.set( window.innerWidth / 2, window.innerHeight / 2 );
		
		scene = new SILK.Scene();
		
		square = new SILK.Rect({ width: 80, height: 80, wireframe: true, color: 0xff0000 });
		scene.add( square );
		
		document.body.appendChild( canvas.domElement );
	}
	
	function animate () {
		
		requestAnimationFrame( animate );
		
		square.rotation += 0.02;
		canvas.render( scene, camera );
	}
	
</script>
```

You should see [this](http://g.recordit.co/zSlm2pmh2C.gif) in less blurry
