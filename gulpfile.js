var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    less: ['./src/less/main.less'],
    lessWatch: ['./src/**/*.less']
};

gulp.task('default', ['css']);

gulp.task('css', () => {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('watch', () => {
    gulp.watch(paths.lessWatch, ['css']);
});