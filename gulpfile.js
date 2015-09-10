var gulp = require('gulp');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var paths = {
    scripts: ['./src/**/*.js', './src/**/*.jsx'],
    less: ['./src/less/style.less']
};

gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function(){
    var b = browserify({
        debug: true
    });
    b.transform(reactify); // use the reactify transform
    b.add('./src/main.js');
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['default']);
    gulp.watch(paths.less, ['less']);
});