SILK.SpriteMaterial = function ( options ) {
	
	SILK.ImageMaterial.call( this, options );
	
	options = options || {};
	
	this.type = 'SpriteMaterial';
	
	this.frame    = options.frame !== undefined ? options.frame : 1;
	this.duration = options.duration !== undefined ? options.duration : 1;
	
	this.x = options.x !== undefined ? options.x : 0;
	this.y = options.y !== undefined ? options.y : 0;
	
	this.width  = options.width !== undefined ? options.width : 0;
	this.height = options.height !== undefined ? options.height : 0;
	
	this.length = options.length !== undefined ? options.length : 1;
	this.repeat = options.repeat !== undefined ? options.repeat : true;
};

SILK.SpriteMaterial.prototype = Object.create( SILK.ImageMaterial.prototype );
SILK.SpriteMaterial.prototype.constructor = SILK.SpriteMaterial;

SILK.SpriteMaterial.prototype.render = function ( context ) {
	
	SILK.Material.prototype.render.call( this, context );
	
	this.frame += 1 / this.duration;
	this.frame %= this.length;
	
	context.drawImage(
		
		this.image,
		
		this.x + ( this.frame | 0 ) * this.width,
		this.y,
		
		this.width,
		this.height,
		
		- this.width / 2,
		- this.height / 2,
		
		this.width,
		this.height
	);
};
