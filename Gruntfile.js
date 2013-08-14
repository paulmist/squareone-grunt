module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass:dev'],
				options: {
					interrupt: true
				}
			},
			
			js: {
				files: 'assets/js/**/*.js',
				tasks: ['uglify:dev'],
				options: {
					interrupt: true
				}
			},

			liquid: {
				files: ''
			}
		},

		jekyll: {
			dev: {
				src: '',
				dest: '',
				layouts: '',

			}
		},
		
		jshint: {
			files: ['assets/js/*.js']
		},
		
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'assets/scss/',
					src: ['*.scss'],
					dest: 'assets/css/',
					ext: '.css'
				}]
			}
		},

		uglify: {
			dev: {

			}
		},

		svgmin: {
			dev: {

			}
		},

		connect: {
			dev: {
				options: {
					port: 8000,
					base: 'www-roots/'
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-notify');				// Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-jekyll');				// Compiling liquid templates
	grunt.loadNpmTasks('grunt-grunticon');			// Processing SVG files
	grunt.loadNpmTasks('grunt-svgmin');				// Optimize SVG files
	grunt.loadNpmTasks('grunt-contrib-watch');		// Watch files for changes
	grunt.loadNpmTasks('grunt-contrib-uglify');		// Minification of JS
	grunt.loadNpmTasks('grunt-contrib-jshint');		// JS validation
	grunt.loadNpmTasks('grunt-contrib-sass');		// Compile SASS
	grunt.loadNpmTasks('grunt-contrib-connect');	// Run local server

	grunt.registerTask('default',
		[
		'connect',
		'jshint',									// Check JS
		'sass:dev' 									// Compile Sass to *****
		//'uglify:dev',								// Minify JS to *****
		//'svgmin:dev',								// Optimize SVG in *****
		
		]
		);
}