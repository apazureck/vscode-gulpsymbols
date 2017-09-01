var gulp = require('gulp'),
    fs = require('fs'),
    md = require('markdown-it')({
        html: true,
        linkify: true,
        typographer: true
    }).use(require('markdown-it-anchor')),
    gutil = require('gulp-util'),
    zip = require('gulp-zip'),
    del = require('del'),
    sequence = require('run-sequence'),
    exec = require('child_process').exec,
    rename = require('gulp-rename'),
    path = require('path'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    bsync = require('browser-sync'),
    reload = bsync.reload,
    nodemon = require('gulp-nodemon'),
    clean = require('gulp-clean'),
    ui5preload = require('gulp-ui5-preload'),
    gulpif = require('gulp-if'),
    prettydata = require('gulp-pretty-data'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    deleteEmpty = require('delete-empty');;


// Create typescript project for compiler
var tsProject = ts.createProject("tsconfig.json");
var sourcespattern = ['src/**/*', '!**/*.ts', '!**/*.less'];
var frontendDeploymentFolder = '../../_Release/LR AMS Frontend.IIS';
var backendReleaseSolutionPath = "..\\..\\LRA5-MS\\AMSBackendReleaseBuild\\AMSBackendReleaseBuild.sln";
var gatewayReleaseSolutionPath = "..\\..\\LRA5-MS\\AMSBackendReleaseBuild\\AMSGatewayReleaseBuild.sln";

var logConsoleOutput = (error, stdout, stderr) => {
    if (error) {
        gutil.log(error);
        gutil.log("stderr:");
        gutil.log(stderr);
        gutil.log("stdout:");
        gutil.log(stdout);
    } else {
        gutil.log(stdout);
    }

}

gulp.task('default', function() {
    sequence(['testa', 'testb'], 'watch');
});

gulp.task('watch', () => {
    // Check test test
})

gulp.task('valid', () => {
    // Check test test
})

gulp.task('valid_specialCharacters;-?!012=', () => {
    // Check test test
})

gulp.task('notvalid_space ', () => {
    // Check test test
})

gulp.task(`notvalid
gravereturn`, () => {
    // Check test test
})

gulp.task(`validgrave`, () => {
    // Check test test
})

gulp.task(``, () => {
    // Check test test
})