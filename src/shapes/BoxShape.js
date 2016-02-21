SILK.BoxShape = function ( options ) {
	
	options = options || {};
	
	this.type   = 'BoxShape';
	this.width  = options.width  !== undefined ? options.width : 0;
	this.height = options.height !== undefined ? options.height : 0;
};

SILK.BoxShape.prototype = {
	
	constructor: SILK.BoxShape,
	
	render: function ( context ) {
		
		var _w2 = this.width / 2,
			_h2 = this.height / 2;
		
		context.beginPath();
	
		context.moveTo( - _w2, - _h2 );
		context.lineTo( - _w2, _h2 );
		context.lineTo( _w2, _h2 );
		context.lineTo( _w2, - _h2 );
		
		context.closePath();
	}
};
