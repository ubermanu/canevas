SILK.Scene = function () {
	
	this.children = [];
	
	// add child
	
	this.add = function ( object ) {
		
		if ( object instanceof SILK.Object2D ) {
			
			if ( object.parent !== null ) {
				object.parent.remove( object );
			}
			
			object.parent = this;
			this.children.push( object );
			
		} else {
			
			console.error( "SILK.Canvas.add: object is not an instance of SILK.Object2D", object );
		}
		
		return this;
	};
	
	// remove child
	
	this.remove = function ( object ) {
		
		var index = this.children.indexOf( object );
		
		if ( index !== - 1 ) {
			object.parent = null;
			this.children.splice( index, 1 );
		}
	};
};
