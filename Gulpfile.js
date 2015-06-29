var gulp = require('gulp'),
	less = require('gulp-less'),
	LessPluginCleanCSS = require('less-plugin-clean-css'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	uglyfly = require('gulp-uglyfly'),
	browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

var cleancss = new LessPluginCleanCSS({
		advanced: true
	}),
	autoprefix = new LessPluginAutoPrefix({
		browsers: ["last 2 versions"]
	});

gulp.task('less', function() {
	return gulp.src('assets/less/*.less','!assets/less/properties.less')
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('browserify', function() {
	gulp.src(['app/app.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		// Bundle to a single file
		.pipe(concat('bundle.js'))
		.pipe(uglyfly())
		// Output it to our dist folder
		.pipe(gulp.dest('public/js'));
});

gulp.task('default', function() {
	gulp.run('less');
	gulp.run('browserify');
	gulp.watch('assets/less/*.less', ['less']);

	gulp.watch('app/**/*.js',['browserify']);
});