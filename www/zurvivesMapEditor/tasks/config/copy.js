/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './node_modules/jquery/dist/',
        src: ['jquery.js'],
        dest: '.tmp/public/js/dependencies/jquery'
      },
        {
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      },
      {
        expand: true,
        cwd: './node_modules/bootstrap/dist/css',
        src: ['bootstrap.css'],
        dest: '.tmp/public/styles/bootstrap'
      },
      {
        expand: true,
        cwd: './node_modules/bootstrap/dist/js',
        src: ['bootstrap.bundle.js'],
        dest: '.tmp/public/js/bootstrap'
      },
      {
        expand: true,
        cwd: './node_modules/core-js/client/',
        src: ['shim.min.js'],
        dest: '.tmp/public/js/core-js/'
      },
      {
        expand: true,
        cwd: './node_modules/zone.js/dist/',
        src: ['zone.js'],
        dest: '.tmp/public/js/zonejs/'
      },
      {
        expand: true,
        cwd: './node_modules/reflect-metadata/',
        src: ['Reflect.js'],
        dest: '.tmp/public/js/reflect-metadata/'
      },
      {
        expand: true,
        cwd: './node_modules/systemjs/dist/',
        src: ['system.src.js'],
        dest: '.tmp/public/js/systemjs/'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    nodeAngular: {
      files: [{
        expand: true,
        cwd: './node_modules/@angular/',
        src: ['**/*.js'],
        dest: 'assets/js/dependencies/@angular/'
      },
      {
        expand: true,
        cwd: './node_modules/angular2-in-memory-web-api/',
        src: ['**/*.js'],
        dest: 'assets/js/dependencies/angular2-in-memory-web-api/'
      },
      {
        expand: true,
        cwd: './node_modules/rxjs/',
        src: ['**/*.js'],
        dest: 'assets/js/dependencies/rxjs/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
