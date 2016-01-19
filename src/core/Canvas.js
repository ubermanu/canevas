SILK.Canvas = function () {
	
	console.log( 'SILK.Canvas', SILK.VERSION );
	
	var _canvas = document.createElement( 'canvas' );
	var _context = _canvas.getContext( '2d' );
	
	// public properties
	
	this.domElement = _canvas;
	this.context = null;
	this.autoClear = true;
	this.children = [];
	
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
	
	// add child
	
	this.add = function ( object ) {
		
		if ( object instanceof SILK.Object2D ) {
			
			if ( object.parent !== null ) {
				object.parent.remove( object );
			}
			
			object.parent = this;
			this.children.push( object );
			
		} else {
			
			console.error( "SILK.Canvas.add: object not an instance of SILK.Object2D.", object );
		}
		
		return this;
	};
	
	// remove child
	
	this.remove = function ( object ) {
		
		var index = this.children.indexOf( object );
		
		if ( index !== - 1 ) {
			object.parent = null;
			this.children.splice( index, 1 );
		}
	};
	
	// render
	
	this.render = function ( scene ) {
		
		if ( this.autoClear == true ) this.clear();
		
		for ( var i = 0; i < this.children.length; i++ ) {
			this.children[ i ].render( _context );
		}
	};
}