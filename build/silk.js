/*! silk.js 2016-02-20 */
var SILK = { VERSION: '0' };
SILK.Canvas = function () {
	
	console.log( 'SILK.Canvas', SILK.VERSION );
	
	var _canvas  = document.createElement( 'canvas' );
	var _context = _canvas.getContext( '2d' );
	
	// public properties
	
	this.domElement = _canvas;
	this.context 	= null;
	this.autoClear 	= true;
	
	this.setSize = function ( width, height ) {
		
		_canvas.width = width;
		_canvas.height = height;
		
		_canvas.style.width = width + 'px';
		_canvas.style.height = height + 'px';
	};
	
	// clearing
	
	this.clear = function () {
		_context.clearRect( 0, 0, _canvas.width, _canvas.height );
	};
	
	// render
	
	this.render = function ( scene ) {
		
		if ( scene instanceof SILK.Scene ) {
			
			if ( this.autoClear == true ) this.clear();
			
			for ( var i = 0; i < scene.children.length; i++ ) {
				scene.children[ i ].render( _context );
			}
			
		} else {
			
			console.error( "SILK.Canvas.render: scene is not an instance of SILK.Scene", scene );
		}
	};
}
SILK.Object2D = function ( options ) {
	
	Object.defineProperty( this, 'id', { value: SILK.Object2DIdCount ++ });
	
	options = options || {};
	
	this.type = 'Object2D';
	this.parent = null;
	
	this.position = new SILK.Vector2();
	this.rotation = 0;
	this.scale = 1;
	
	this.visible = true;
	this.wireframe = options.wireframe !== undefined ? options.wireframe : false;
	
	var _color = options.color !== undefined ? options.color : 0x000000;
	this.color = new SILK.Color( _color );
};

SILK.Object2D.prototype = {
	
	constructor: SILK.Object2D,
	
	render: function ( context ) {
		
		if ( ! this.visible ) return;
		
		if ( this.rotation > Math.PI * 2 ) this.rotation = 0;
		
		context.save();
		context.translate( this.position.x, this.position.y );
		context.rotate( this.rotation );
	}
}

SILK.Object2DIdCount = 0;
SILK.Color = function ( color ) {
	return this.setHex( color );
};

SILK.Color.prototype = {
	
	constructor: SILK.Color,
	r: 1, g: 1, b: 1,
	
	setHex: function ( hex ) {
		
		hex = Math.floor( hex );
		
		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;
		
		return this;
	},

	setRGB: function ( r, g, b ) {
		
		this.r = r;
		this.g = g;
		this.b = b;
		
		return this;
	},
	
	getStyle: function () {
		
		var _r = ( this.r * 255 ) | 0,
			_g = ( this.g * 255 ) | 0,
			_b = ( this.b * 255 ) | 0;
		
		return 'rgb(' + _r + ',' + _g + ',' + _b + ')';
	}
};
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
SILK.Circle = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.Circle.prototype = Object.create( SILK.Object2D.prototype );

SILK.Circle.prototype.constructor = SILK.Circle;

SILK.Circle.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	context.beginPath();
	context.arc( 0, 0, this.radius, 0, 2 * Math.PI );
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.stroke();
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fill();
	}
	
	context.restore();
};
SILK.Rect = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.width = options.width !== undefined ? options.width : 0;
	this.height = options.height !== undefined ? options.height : 0;
};

SILK.Rect.prototype = Object.create( SILK.Object2D.prototype );

SILK.Rect.prototype.constructor = SILK.Rect;

SILK.Rect.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	var _x = - this.width / 2,
		_y = - this.height / 2,
		_w = this.width,
		_h = this.height;
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.strokeRect( _x, _y, _w, _h );
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fillRect( _x, _y, _w, _h );
	}
	
	context.restore();
};
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

SILK.Triangle = function ( options ) {
	
	SILK.Object2D.call( this, options );
	
	options = options || {};
	
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.Triangle.prototype = Object.create( SILK.Object2D.prototype );

SILK.Triangle.prototype.constructor = SILK.Triangle;

SILK.Triangle.prototype.render = function ( context ) {
	
	SILK.Object2D.prototype.render.call( this, context );
	
	var toRadian = Math.PI / 180;
	
	var _a = new SILK.Vector2(
		Math.cos( 30 * toRadian ),
		Math.sin( 30 * toRadian ))
		.multScalar( this.radius );
	
	var _b = new SILK.Vector2(
		Math.cos( 150 * toRadian ),
		Math.sin( 150 * toRadian ))
		.multScalar( this.radius );
	
	var _c = new SILK.Vector2(
		Math.cos( 270 * toRadian ),
		Math.sin( 270 * toRadian ))
		.multScalar( this.radius );
	
	context.beginPath();
	
	context.moveTo( _a.x, _a.y );
	context.lineTo( _b.x, _b.y );
	context.lineTo( _c.x, _c.y );
	
	context.closePath();
	
	if ( this.wireframe ) {
		
		context.strokeStyle = this.color.getStyle();
		context.stroke();
		
	} else {
		
		context.fillStyle = this.color.getStyle();
		context.fill();
	}
	
	context.restore();
};