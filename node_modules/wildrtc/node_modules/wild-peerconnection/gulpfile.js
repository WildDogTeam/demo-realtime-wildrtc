var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
// Basic usage 
gulp.task('script', function() {
	// Single entry point to browserify 
	gulp.src('index.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : false
          
		}))
        .pipe(rename("wild-peerconnection.js"))
		.pipe(gulp.dest('./'))
});

var connect = require('gulp-connect');
 
gulp.task('serve', function() {
  connect.server({
    root: './',
    livereload: true,
    fallback:"test/simpleRTC.html"
  });
});
