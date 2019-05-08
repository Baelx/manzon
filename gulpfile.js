const gulp = require('gulp'),
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
webpack = require('webpack'),
webpackStream = require('webpack-stream'),
browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./app/assets/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./app/temp/css'))
  .pipe(browserSync.stream());
};

function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('./app/assets/**/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/js/**/*.js').on('change', scripts);
};

function scripts() {
  return (
    gulp
      .src(["./app/assets/js/**/*.js"])
      .pipe(plumber())
      .pipe(webpackStream(require('./webpack.config.js')))
      .pipe(gulp.dest("./app/temp/js/"))
      .pipe(browserSync.stream())
  );
}

exports.watch = watch;
exports.scripts = scripts;
exports.style = style;
