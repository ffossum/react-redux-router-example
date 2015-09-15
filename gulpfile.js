var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babelify = require("babelify");

var paths = {
    scripts: ['./src/**/*.js', './src/**/*.jsx'],
    less: ['./src/less/main.less'],
    lessWatch: ['./src/**/*.less']
};

gulp.task('default', ['js', 'css']);

gulp.task('css', function () {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
    var b = browserify({
        debug: true
    });
    b.transform(reactify);
    b.transform(babelify);
    b.add('./src/main.js');
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.lessWatch, ['css']);
});