SILK.Object2D = function ( options ) {
	
	Object.defineProperty( this, 'id', { value: SILK.Object2DIdCount ++ });
	
	options = options || {};
	
	this.type = 'Object2D';
	this.parent = null;
	
	this.position = new SILK.Vector2();
	this.rotation = 0;
	this.scale = 1;
	
	this.visible = true;
	this.wireframe = options.wireframe !== undefined ? options.wireframe : false;
	
	var _color = options.color !== undefined ? options.color : 0x000000;
	this.color = new SILK.Color( _color );
};

SILK.Object2D.prototype = {
	
	constructor: SILK.Object2D,
	
	render: function ( context ) {
		
		if ( ! this.visible ) return;
		
		// if ( this.rotation > Math.PI * 2 ) this.rotation = 0;
		
		context.save();
		context.translate( this.position.x, this.position.y );
		context.rotate( this.rotation );
	}
}

SILK.Object2DIdCount = 0;