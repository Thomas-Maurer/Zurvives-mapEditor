module.exports = function(grunt) {

 grunt.config.set('copynodefiles', {
   dev: {
     files: [{
       expand: true,
       cwd: './node_modules/bootstrap/dist/css',
       src: ['**/*.!(coffee|less)'],
       dest: '.tmp/public/css'
     }]
   },
   build: {
     files: [{
       expand: true,
       cwd: '.tmp/public',
       src: ['**/*'],
       dest: 'www'
     }]
   }
 });

 grunt.loadNpmTasks('grunt-contrib-copy');
};
