SILK.Rect = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.width = options.width !== undefined ? options.width : 0;
	this.height = options.height !== undefined ? options.height : 0;
};

SILK.Rect.prototype = Object.create( SILK.Object2D.prototype );

SILK.Rect.prototype.constructor = SILK.Rect;

SILK.Rect.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	var _x = - this.width / 2,
		_y = - this.height / 2,
		_w = this.width,
		_h = this.height;
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.strokeRect( _x, _y, _w, _h );
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fillRect( _x, _y, _w, _h );
	}
	
	context.restore();
};