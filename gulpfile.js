var gulp = require('gulp'),
  watch = require('gulp-watch');
path = require('path');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var del = require('del');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var connect = require('gulp-connect');

gulp.task('watch', function() {
  watch(['bower_components/**/*.js',
    'bower_components/**/*.css',
    'app/**/*.*'
  ], function(event) {
    browserSync.reload(event.path)
  });
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    startPath: '/',
    server: {
      baseDir: "app",
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules': 'node_modules'
      }
    },
    https: false
  });
});

gulp.task('clean', function() {
  return del(['dist', 'rev']);
});

gulp.task('usemin', ['clean'], function() {
  return gulp.src('./app/*.html')
    .pipe(usemin({
      js: [uglify, rev],
      css: [cssmin, rev],
      ng: [uglify, rev]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', ['clean'], function() {
  return gulp.src('./app/images/**/*.{jpg,png,svg}')
    // Pass in options to the task
    .pipe(imagemin({
      optimizationLevel: 5
    }))
    .pipe(rev())
    .pipe(gulp.dest('dist/images'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/'))
});

gulp.task('revCollector', ['images', 'usemin'], function() {
  return gulp.src(['rev/**/*.json', 'dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('build', ['clean', 'usemin', 'images', 'revCollector']);

gulp.task('server', function() {
  connect.server({
    root: './app',
    livereload: true,
    https: true,
    fallback: "index.html"
  });
})
