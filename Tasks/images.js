'use strict';

var del = require('del');
var gulp = require('gulp');
var vinylPaths = require('vinyl-paths');
var config = require('./Config/config.js');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();

gulp.task('svgmin', function() {
	return gulp.src('./Images/**/raw_*.svg')
		.pipe($.plumber())
		.pipe($.svgmin());
});

gulp.task('kraken', function() {
	return gulp.src([
		'./Images/**/raw_*.png',
		'./Images/**/raw_*.jpg'
	])
		.pipe($.plumber())
		.pipe($.kraken({
		key: 'f015613e4377a24834e90823a946c093',
		secret: '73bbc6f7c8085848af31d7e9eb1fd63b22d6e30e',
		lossy: false
	}));
});

gulp.task('renameRaw', ['svgmin', 'kraken'], function() {
	return gulp.src(config.imgPaths)
		.pipe($.plumber())
		.pipe($.rename(function(path) {
			path.basename = path.basename.substring(4, path.basename.length);
		}))
		.pipe(gulp.dest('./dist/Images/'));
});

gulp.task('removeRaw', ['renameRaw'], function() {
	return gulp.src(config.imgPaths)
		.pipe($.plumber())
		.pipe(vinylPaths(del));
});
