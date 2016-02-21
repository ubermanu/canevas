SILK.Material = function ( options ) {
	
	options = options || {};
	
	this.type 	= 'Material';
	this.alpha 	= options.alpha !== undefined ? options.alpha : 1.0;
};

SILK.Material.prototype = {
	
	constructor: SILK.Material,
	
	render: function ( context ) {
		
		context.globalAlpha = this.alpha;
	}
};
