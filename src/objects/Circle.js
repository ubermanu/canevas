SILK.Circle = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.Circle.prototype = Object.create( SILK.Object2D.prototype );

SILK.Circle.prototype.constructor = SILK.Circle;

SILK.Circle.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	context.beginPath();
	context.arc( 0, 0, this.radius, 0, 2 * Math.PI );
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.stroke();
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fill();
	}
	
	context.restore();
};