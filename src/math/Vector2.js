// https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js

SILK.Vector2 = function ( x, y ) {
	this.x = x || 0;
	this.y = y || 0;
	return this;
};

SILK.Vector2.prototype = {
	
	constructor: SILK.Vector2,
	
	set: function ( x, y ) {
		this.x = x;
		this.y = y;
		return this;
	},
	
	copy: function ( v ) {
		this.x = v.x;
		this.y = v.y;
		return this;
	},
	
	clone: function () {
		return new SILK.Vector2( this.x, this.y );
	},
	
	add: function ( v ) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},
	
	addScalar: function ( scalar ) {
		this.x += scalar;
		this.y += scalar;
		return this;
	},
	
	sub: function ( v ) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},
	
	subScalar: function ( scalar ) {
		this.x -= scalar;
		this.y -= scalar;
		return this;
	},
	
	mult: function ( v ) {
		this.x *= v.x;
		this.y *= v.y;
		return this;
	},
	
	multScalar: function ( scalar ) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	},
	
	div: function ( v ) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	},
	
	divScalar: function ( scalar ) {
		
		if ( scalar == 0 ) return new SILK.Vector2();
		
		this.x /= scalar;
		this.y /= scalar;
		return this;
	},
	
	lengthSq: function () {
		return this.x * this.x + this.y * this.y;
	},
	
	length: function () {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	},
	
	normalize: function () {
		return this.divScalar( this.length() );
	},
	
	limit: function ( max ) {
		
		if ( this.length() > max ) {
			this.normalize();
			this.multScalar( max );
		}
		
		return this;
	},
	
	distanceTo: function ( v ) {
		return Math.sqrt( this.distanceToSq( v ));
	},
	
	distanceToSq: function ( v ) {
		var dx = this.x - v.x,
			dy = this.y - v.y;
		return dx * dx + dy * dy;
	}
};