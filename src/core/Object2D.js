SILK.Object2D = function ( options ) {
	
	Object.defineProperty( this, 'id', { value: SILK.Object2DIdCount ++ });
	
	options = options || {};
	
	this.type 		= 'Object2D';
	this.parent 	= null;
	this.children 	= [];
	
	this.position 	= options.position !== undefined ? options.position : new SILK.Vector2();
	this.rotation 	= options.rotation !== undefined ? options.rotation : 0;
	this.scale 		= options.scale    !== undefined ? options.scale : 1;
	
	this.visible 	= options.visible  !== undefined ? options.visible : true;
};

SILK.Object2D.prototype = {
	
	constructor: SILK.Object2D,
	
	add: function ( object ) {
		
		if ( object instanceof SILK.Object2D ) {
			
			if ( object.parent !== null ) {
				
				object.parent.remove( object );
			}
			
			object.parent = this;
			this.children.push( object );
			
		} else {
			
			console.error( "SILK.Object2D.add: object is not an instance of SILK.Object2D", object );
		}
		
		return this;
	},
	
	remove: function ( object ) {
		
		var index = this.children.indexOf( object );
		
		if ( index !== - 1 ) {
			
			object.parent = null;
			this.children.splice( index, 1 );
		}
	}
}

SILK.Object2DIdCount = 0;
