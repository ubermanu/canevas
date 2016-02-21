SILK.BasicMaterial = function ( options ) {
	
	SILK.Material.call( this, options );
	
	options = options || {};
	
	this.type 		= 'BasicMaterial';
	
	this.wireframe 	= options.wireframe !== undefined ? options.wireframe : false;
	
	var _color 		= options.color !== undefined ? options.color : 0x000000;
	this.color 		= new SILK.Color( _color );
};

SILK.BasicMaterial.prototype = Object.create( SILK.Material.prototype );
SILK.BasicMaterial.prototype.constructor = SILK.BasicMaterial;

SILK.BasicMaterial.prototype.render = function ( context ) {
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.stroke();
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fill();
	}
};
