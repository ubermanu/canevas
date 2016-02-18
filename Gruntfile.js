module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			concat: {
				src: ['src/**/*'],
				dest: 'build/silk.min.js',
				filter: 'isFile'
			},
			options: {
				banner: '/*! silk.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'build/silk.js',
				dest: 'build/silk.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);
};