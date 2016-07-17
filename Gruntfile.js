// Gruntfile.js

module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        ngAnnotate: {
            scripts: {
                expand: true,
                src: ['public/js/**/*.js']
            }
        },
        usemin: {
            html: 'app/views/**/*.ejs'
        },
        useminPrepare: {
            options: {
                root: 'public',
                dest: 'public'
            },
            html: 'app/views/**/*.ejs'
        }
    });
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate');
};