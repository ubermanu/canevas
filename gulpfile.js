var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    watch = require('gulp-watch'),
    pkg = require('./package.json');

var banner = '/**\n' +
    ' * <%= pkg.name %>\n' +
    ' * @version <%= pkg.version %>\n' +
    ' * @author <%= pkg.author %>\n' +
    ' * @url <%= pkg.repository.url %>\n' +
    ' * @license <%= pkg.license %>\n' +
    ' */\n\n';

gulp.task('build', function() {
    return gulp.src([
            './src/Silk.js',
            './src/math/*.js',
            './src/core/*.js',
            './src/materials/*.js',
            './src/shapes/*.js',
            './src/objects/*.js',
        ])
        .pipe(concat('silk.js', { newLine: '\n\n' }))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/silk.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dev', function () {
    return watch('src/**/*.js', function () {
        gulp.start('build', 'compress');
    });
});

gulp.task('default', ['build', 'compress']);