SILK.Camera = function ( options ) {
	
	options = options || {};
	
	this.type 		= 'Camera';
	
	this.position 	= options.position !== undefined ? options.position : new SILK.Vector2();
	this.rotation 	= options.rotation !== undefined ? options.rotation : 0;
	this.zoom 		= options.zoom     !== undefined ? options.zoom : 1;
};