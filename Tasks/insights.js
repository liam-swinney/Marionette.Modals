var gulp = require('gulp');
var psi = require('psi');
var notify = require('gulp-notify');


gulp.task('insights:desktop', function () {
		return psi('http://alexnewman.io', {
				nokey: 'true',
				strategy: 'desktop',
		}, function (err, data) {
				console.log('\x1b[47m\x1b[35m%s\x1b[0m', '   ' +  data.score + '/100   ');
				console.log(data.pageStats);
		});
});
