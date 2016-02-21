SILK.Mesh = function ( shape, material ) {
	
	SILK.Object2D.call( this );
	
	this.type = 'Mesh';
	
	this.shape = shape !== undefined ? shape : new SILK.Shape();
	this.material = material !== undefined ? material : new SILK.BasicMaterial({ color: Math.random() * 0xffffff });
};

SILK.Mesh.prototype = Object.create( SILK.Object2D.prototype );
SILK.Mesh.prototype.constructor = SILK.Mesh;

SILK.Mesh.prototype.render = function ( context ) {
	
	this.rotation %= Math.PI * 2;
	
	if ( this.visible ) {
		
		context.save();
		
		context.scale( this.scale, this.scale );
		context.translate( this.position.x, this.position.y );
		context.rotate( this.rotation );
		
		this.shape.render( context );
		this.material.render( context );
		
		context.restore();
	}
};
