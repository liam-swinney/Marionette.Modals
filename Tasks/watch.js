'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./scss/**/*.scss'], ['inlinesource']);
  gulp.watch(['./index.html', './scss/**/*.scss'], ['inlinesource', 'minify', 'livereload']);
  gulp.watch(['./Images/**/*.+(png|svg|jpg)'], ['removeRaw']);
  gulp.watch(['./App/**/*.js'], ['lint', 'browserify']);
});
