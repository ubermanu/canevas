/*! silk.js 2016-02-21 */
var SILK = { VERSION: '1' };
var $$ = $$ || SILK;

SILK.Camera = function ( options ) {
	
	options = options || {};
	
	this.type 		= 'Camera';
	
	this.position 	= options.position !== undefined ? options.position : new SILK.Vector2();
	this.rotation 	= options.rotation !== undefined ? options.rotation : 0;
	this.zoom 		= options.zoom     !== undefined ? options.zoom : 1;
};
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
	
	this.render = function ( scene, camera ) {
		
		if ( ! ( scene instanceof SILK.Scene )) {
			console.error( "SILK.Canvas.render: scene is not an instance of SILK.Scene", scene );
			return;
		}
		
		if ( ! ( camera instanceof SILK.Camera )) {
			console.error( "SILK.Canvas.render: camera is not an instance of SILK.Camera", camera );
			return;
		}
		
		if ( this.autoClear == true ) this.clear();
		
		// load camera context
		_context.save();
		_context.scale( camera.zoom, camera.zoom );
		_context.translate( camera.position.x, camera.position.y );
		_context.rotate( camera.rotation );
		
		// render scene objects
		for ( var i = 0; i < scene.children.length; i++ ) {
			scene.children[ i ].render( _context );
		}
		
		// restore camera context
		_context.restore();
	};
}
SILK.Material = function ( options ) {
	
	options = options || {};
	this.type = 'Material';
};

SILK.Material.prototype = {
	
	constructor: SILK.Material,
	
	render: function ( context ) {
		
	}
};

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

SILK.Shape = function ( options ) {
	
	options = options || {};
	this.type = 'Shape';
};

SILK.Shape.prototype = {
	
	constructor: SILK.Shape,
	
	render: function ( context ) {
		
	}
};

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

SILK.Scene = function () {
	
	SILK.Object2D.call( this );
	
	this.type = 'Scene';
};

SILK.Scene.prototype = Object.create( SILK.Object2D.prototype );
SILK.Scene.prototype.constructor = SILK.Scene;

SILK.BoxShape = function ( options ) {
	
	options = options || {};
	
	this.type   = 'BoxShape';
	this.width  = options.width  !== undefined ? options.width : 0;
	this.height = options.height !== undefined ? options.height : 0;
};

SILK.BoxShape.prototype = {
	
	constructor: SILK.BoxShape,
	
	render: function ( context ) {
		
		var _w2 = this.width / 2,
			_h2 = this.height / 2;
		
		context.beginPath();
	
		context.moveTo( - _w2, - _h2 );
		context.lineTo( - _w2, _h2 );
		context.lineTo( _w2, _h2 );
		context.lineTo( _w2, - _h2 );
		
		context.closePath();
	}
};

SILK.CircleShape = function ( options ) {
	
	options = options || {};
	
	this.type   = 'CircleShape';
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.CircleShape.prototype = {
	
	constructor: SILK.CircleShape,
	
	render: function ( context ) {
		
		context.beginPath();
		context.arc( 0, 0, this.radius, 0, 2 * Math.PI );
		context.closePath();
	}
};

SILK.TriangleShape = function ( options ) {
	
	options = options || {};
	
	this.type   = 'TriangleShape';
	this.radius = options.radius !== undefined ? options.radius : 0;
};

SILK.TriangleShape.prototype = {
	
	constructor: SILK.TriangleShape,
	
	render: function ( context ) {
		
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
	}
};
