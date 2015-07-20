'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var config = require('./Config/config.js');

gulp.task('inlinesource', ['sass'], function() {
	gulp.src('./index.html')
		.pipe($.plumber())
		.pipe($.inlineSource())
		.pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['inlinesource'], function() {
	return gulp.src('./dist/index.html')
		.pipe($.plumber())
		.pipe($.htmlmin(config.htmlmin))
		.pipe(gulp.dest('./dist'));
});
