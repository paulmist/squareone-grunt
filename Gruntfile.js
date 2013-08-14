module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadNpmTasks('grunt-notify');				// Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-jekyll');				// Compiling liquid templates
	grunt.loadNpmTasks('grunt-grunticon');			// Processing SVG files
	grunt.loadNpmTasks('grunt-contrib-watch');		// Watch files for changes
	grunt.loadNpmTasks('grunt-contrib-uglify');		// Minification of JS
	grunt.loadNpmTasks('grunt-contrib-sass');		// Compile SASS
	grunt.loadNpmTasks('grunt-contrib-cssmin');		// Minification of CSS
	grunt.loadNpmTasks('grunt-contrib-connect');	// Run local server
}