SILK.Triangle = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.Triangle.prototype = Object.create( SILK.Object2D.prototype );

SILK.Triangle.prototype.constructor = SILK.Triangle;

SILK.Triangle.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	var toRadian = Math.PI / 180;
	
	var _a = new SILK.Vector2(
		Math.cos( 30 * toRadian ),
		Math.sin( 30 * toRadian ))
		.multScalar( this.radius );
	
	var _b = new SILK.Vector2(
		Math.cos( 150 * toRadian ),
		Math.sin( 150 * toRadian ))
		.multScalar( this.radius );
	
	var _c = new SILK.Vector2(
		Math.cos( 270 * toRadian ),
		Math.sin( 270 * toRadian ))
		.multScalar( this.radius );
	
	context.beginPath();
	
	context.moveTo( _a.x, _a.y );
	context.lineTo( _b.x, _b.y );
	context.lineTo( _c.x, _c.y );
	
	context.closePath();
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.stroke();
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fill();
	}
	
	context.restore();
};