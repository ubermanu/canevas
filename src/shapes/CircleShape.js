SILK.CircleShape = function ( options ) {
	
	options = options || {};
	
	this.type   = 'CircleShape';
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.CircleShape.prototype = {
	
	constructor: SILK.CircleShape,
	
	render: function ( context ) {
		
		context.beginPath();
		context.arc( 0, 0, this.radius, 0, 2 * Math.PI );
		context.closePath();
	}
};
