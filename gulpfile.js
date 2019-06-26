/*
 * @Author: GuangGe
 * @Date:   2016-01-27 22:40:03
 * @Last Modified by:   GuangGe
 * @Last Modified time: 2016-01-28 22:32:33
 */

'use strict';
//首先进行将less文件转化为css文件并且压缩

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
  gulp.src(['src/styles/*.less', '!src/styles/_*.less'])
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/style/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
  gulp.src('src/script/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var browserSync = require('browser-sync');
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['dist/']
    }
  }, function(err, bs) {
    console.log(11);
  });

  gulp.watch('src/styles/*.less', ['style']);
  gulp.watch('src/script/*.js', ['script']);
  gulp.watch('src/*.html', ['html']);
});
