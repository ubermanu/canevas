SILK.ImageMaterial = function ( options ) {
	
	SILK.Material.call( this, options );
	
	options = options || {};
	
	this.type 		= 'ImageMaterial';
	this.clip 		= options.clip !== undefined ? options.clip : true;
	
	this.image 		= document.createElement( 'img' );
	this.image.src  = options.src !== undefined ? options.src : '';
};

SILK.ImageMaterial.prototype = Object.create( SILK.Material.prototype );
SILK.ImageMaterial.prototype.constructor = SILK.ImageMaterial;

SILK.ImageMaterial.prototype.render = function ( context ) {
	
	SILK.Material.prototype.render.call( this, context );
	
	if ( this.clip ) context.clip();
	
	context.drawImage( this.image, - this.image.width / 2, - this.image.height / 2 );
};
