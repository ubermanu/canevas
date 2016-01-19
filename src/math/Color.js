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