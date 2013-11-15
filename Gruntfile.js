module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['dev/assets/scss/**/*.scss'],
				tasks: ['sass:dev'],
				options: {
					interrupt: true
				}
			},
			
			js: {
				files: 'dev/assets/js/**/*.js',
				tasks: ['jshint:dev'],
				options: {
					interrupt: true
				}
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['dev/assets/css/*.css']
			}
			/*
			,

			liquid: {
				files: ''
			}
			*/
		},

		jekyll: {
			dev: {
				src: '',
				dest: '',
				layouts: '',

			}
		},
		
		jshint: {
			dev:{
				files: {
					src: ['dev/assets/js/*.js']
				}
			}
		},
		
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'dev/assets/scss/',
					src: ['*.scss', '!_*.scss'],
					dest: 'dev/assets/css/',
					ext: '.css'
				}]
			}
		},

		uglify: {
			dev: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					        '<%= grunt.template.today("yyyy-mm-dd") %> */',
					preserveComments: 'some'
				},
				files: [
					{
						expand: true,
						cwd: 'dev/assets/js',
						src: ['*.js'],
						dest: 'dev/assets/js',
						ext: '.min.js'
					}
				]
			}

		},

		svgmin: {
			dev: {

			}
		},

		connect: {
			dev: {
				options:{
					port: 8888,
					base: "dev",
					hostname: "*",
          			keepalive: true
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
	
	grunt.registerTask('server', 'connect:dev');
	grunt.registerTask(	'default',
		[
		//'jshint',									// Check JS
		//'sass:dev',								// Compile Sass to *****
		//'uglify:dev',								// Minify JS to *****
		//'svgmin:dev',								// Optimize SVG in *****
		//'connect:dev'
		//'connect:dev',
		'watch'
		]
	);
}