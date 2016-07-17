// Karma configuration
// Generated on Wed Jul 13 2016 21:57:52 GMT-0300 (Hora oficial do Brasil)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            '../public/vendor/angular/angular.js',
            '../public/vendor/angular-mocks/angular-mocks.js',
            '../public/vendor/angular-resource/angular-resource.js',
            '../public/vendor/angular-route/angular-route.js',
            '../public/js/main.js',
            '../public/js/controllers/**/*.js',
            '../public/js/services/**/*.js',
            '../public/js/directives/**/*.js',
            '../test/spec/**/*Spec.js',
            '../public/js/directives/meus-componentes/*.html'
        ],


        // list of files to exclude
        exclude: [
    ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../public/js/directives/**/*.html': 'ng-html2js'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        browserNoActivityTimeout: 60000,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 1,
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-ng-html2js-preprocessor',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-requirejs'
        ],

        ngHtml2JsPreprocessor: {
            moduleName: 'templates',
            stripPrefix: '.*/public/'
        }
    });
}