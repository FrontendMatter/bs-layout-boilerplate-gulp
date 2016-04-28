var gulp = require('gulp');
var sass = require('gulp-sass');
var importer = require('sass-importer-npm');

gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass({ importer: importer }).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-vendor', function () {
	return gulp.src([
		'bootstrap-layout/dist/bootstrap-layout.js',
		'bootstrap/dist/js/bootstrap.min.js',
		'jquery/dist/jquery.min.js',
		'tether/dist/js/tether.min.js',
	], {
		cwd: 'node_modules'
	})
	.pipe(gulp.dest('./dist/vendor'));
});

gulp.task('default', ['copy-vendor', 'sass']);