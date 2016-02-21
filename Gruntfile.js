module.exports = function ( grunt ) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON( 'package.json' ),
		
		concat: {
			dist: {
				src: [ 'src/**/*.js' ],
				dest: 'build/silk.js',
				filter: 'isFile'
			},
			options: {
				banner: '/*! silk.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
		},
		
		uglify: {
			build: {
				src: 'build/silk.js',
				dest: 'build/silk.min.js'
			},
			options: {
				banner: '/*! silk.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
		},
		
		includeSource: {
			options: {
				basePath: '',
				baseUrl: '../'
			},
			testTarget: {
				files: {
					'tests/example.html': 'tests/example.html'
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-include-source' );

	// Default task(s).
	grunt.registerTask( 'default', [ 'includeSource' ]);
	grunt.registerTask( 'build', [ 'concat', 'uglify' ]);
};