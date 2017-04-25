// Karma configuration
// Generated on Sun Apr 02 2017 13:07:42 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './app',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-translate/angular-translate.js',
      '**/*.module.js',
      '**/*.component.js',
      '**/*.spec.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'outputTest', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    },

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
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
