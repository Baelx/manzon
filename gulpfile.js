const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./app/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.stream());
};

function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('./app/**/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
};


exports.style = style;
exports.watch = watch;
