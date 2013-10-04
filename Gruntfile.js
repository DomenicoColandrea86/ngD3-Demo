'use strict';
module.exports = function (grunt) {
  // Project configuration.
	grunt.initConfig({
    // metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n',
    // task config
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/scripts/app.js'
        //'app/scripts/{,*/}*.js'
      ]
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['app/bower_components/spinjs/spin.js', 'app/scripts/**/*.js'],
        dest: 'dist/scripts/scripts.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/scripts/scripts.js': ['dist/scripts/scripts.js']
        }
      }
    },
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					sassDir: 'app/scss',
					cssDir: 'app/css'
				}
			},
			dist: {
				options: {
					config: 'config.rb',
					sassDir: 'app/scss',
					cssDir: 'dist/css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
      files: ['app/{,*/}*.scss', 'app/{,*/}*.html', 'app/scripts/{,*/}*.js', './{,*/}*.js'],
      tasks: 'compass:dev'
		},
    useminPrepare : {
      html: ['index.html'],
      options: {
        dest: 'dist/'
      }
    },
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/css/{,*/}*.css'],
      options: {
        dirs: ['dist/']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/scripts',
          src: '*.js',
          dest: 'dist/scripts'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app/',
          dest: 'dist/',
          src: [
            '*.{ico,png,txt}',
            '{,*/}*.html',
            'images/**/*',
            '{,*/}*.xml',
            'bower_components/**/*',
            '.htaccess',
            'fonts/*'
          ]
        }]
      }
    }
	});

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-usemin');


  // grunt `build` task
  grunt.registerTask('build', [
    // 'jshint',
    'useminPrepare',
    'compass:dist',
    'concat:dist',
    'copy:dist',
    'ngmin',
    'uglify:dist',
    'usemin'
  ]);

  // grunt `default`
  grunt.registerTask('default', [
    // 'jshint',
    'watch'
  ]);
};
