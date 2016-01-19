silk.js
========
Canvas renderer based on THREE.js code format

### Usage ###

```html
<script src="silk.js"></script>

<script>
	
	var canvas, square;
	
	init();
	animate();
	
	function init () {
		
		canvas = new SILK.Canvas();
		canvas.setSize( window.innerWidth, window.innerHeight );
		
		square = new SILK.Rect({ width: 80, height: 80, wireframe: true, color: 0xff0000 });
		square.position.set( window.innerWidth / 2, window.innerHeight / 2 );
		canvas.add( square );
		
		document.body.appendChild( canvas.domElement );
	}
	
	function animate () {
		
		requestAnimationFrame( animate );
		
		square.rotation += 0.02;
		canvas.render();
	}
	
</script>
```

You should see [this](http://g.recordit.co/zSlm2pmh2C.gif) in less blurry
