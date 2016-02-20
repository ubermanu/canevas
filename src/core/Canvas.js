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
	
	this.render = function ( scene ) {
		
		if ( scene instanceof SILK.Scene ) {
			
			if ( this.autoClear == true ) this.clear();
			
			for ( var i = 0; i < scene.children.length; i++ ) {
				scene.children[ i ].render( _context );
			}
			
		} else {
			
			console.error( "SILK.Canvas.render: scene is not an instance of SILK.Scene", scene );
		}
	};
}