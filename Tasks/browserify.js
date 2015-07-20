'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var notify = require('gulp-notify');

var onError = notify.onError({
	title : 'Browserify Error',
	message : '<%= error.message %>'
});

gulp.task('browserify', function () {
	return browserify({
		debug: true,
		entries: ['./App/main.js']
	}).bundle()
		.on('error', onError)
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist/js'));
});
