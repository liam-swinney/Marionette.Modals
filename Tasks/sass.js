'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var config = require('./Config/config.js');

gulp.task('sass', function() {
	 gulp.src(['./scss/main.scss', './scss/inline/main.scss'], {base: 'scss'})
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass(config.sass))
		.on('error', $.notify.onError('Error: <%= error.message %>'))
		.pipe($.autoprefixer(config.autoprefix))
		.pipe($.minifyCss())
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe($.livereload());
});

// gulp.task('uncss', ['sass'], function() {
// 	return gulp.src('./dist/css')
// 		.pipe($.plumber())
// 		.pipe($.uncss(config.uncss));
// });
