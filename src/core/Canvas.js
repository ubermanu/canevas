SILK.Canvas = function () {
	
	console.log( 'SILK.Canvas', SILK.VERSION );
	
	var _canvas  = document.createElement( 'canvas' );
	var _context = _canvas.getContext( '2d' );
	
	// public properties
	
	this.domElement = _canvas;
	this.context 	= null;
	this.autoClear 	= true;
	
	this.setSize = function ( width, height ) {
		
		_canvas.width = width;
		_canvas.height = height;
		
		_canvas.style.width = width + 'px';
		_canvas.style.height = height + 'px';
	};
	
	// clearing
	
	this.clear = function () {
		_context.clearRect( 0, 0, _canvas.width, _canvas.height );
	};
	
	// render
	
	this.render = function ( scene, camera ) {
		
		if ( ! ( scene instanceof SILK.Scene )) {
			console.error( "SILK.Canvas.render: scene is not an instance of SILK.Scene", scene );
			return;
		}
		
		if ( ! ( camera instanceof SILK.Camera )) {
			console.error( "SILK.Canvas.render: camera is not an instance of SILK.Camera", camera );
			return;
		}
		
		if ( this.autoClear == true ) this.clear();
		
		// load camera context
		_context.save();
		_context.translate( camera.position.x, camera.position.y );
		_context.rotate( camera.rotation );
		_context.scale( camera.zoom, camera.zoom );
		
		// render scene objects
		for ( var i = 0; i < scene.children.length; i++ ) {
			scene.children[ i ].render( _context );
		}
		
		// restore camera context
		_context.restore();
	};
}