SILK.Scene = function () {
	
	SILK.Object2D.call( this );
	
	this.type = 'Scene';
};

SILK.Scene.prototype = Object.create( SILK.Object2D.prototype );
SILK.Scene.prototype.constructor = SILK.Scene;
