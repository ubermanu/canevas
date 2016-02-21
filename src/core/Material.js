SILK.Material = function ( options ) {
	
	options = options || {};
	
	this.type 		= 'Material';
	this.opacity 	= options.opacity !== undefined ? options.opacity : 1.0;
};

SILK.Material.prototype = {
	
	constructor: SILK.Material,
	
	render: function ( context ) {
		
		context.globalAlpha = this.opacity;
	}
};
