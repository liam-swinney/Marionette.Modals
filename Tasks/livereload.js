'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload', ['minify'], function() {
	return gulp.src('./dist/index.html')
		.pipe(livereload());
});
