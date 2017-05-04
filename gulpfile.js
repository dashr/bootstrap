'use strict';

var gulp            = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins         = gulpLoadPlugins();

gulp.task('css', function() {
  gulp.src('./css/*.css')
    .pipe(plugins.csslint())
    .pipe(plugins.csslint.reporter('compact'));
});

gulp.task('default',['css'], function() {
  return gulp.src(['.','css/'])
    .pipe(plugins.webserver({
      livereload: true,
      fallback: 'index.html',
      open: true
    }));
});
