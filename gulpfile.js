const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

const processStyles = function() {
  return gulp.src('app/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
};

const initBS = function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
};

const watchFiles = function() {
  gulp.watch('app/scss/**/*.scss', processStyles);
  gulp.watch('app/*.html', browserSync.reload());
};

gulp.task('watch', gulp.parallel(processStyles, initBS, watchFiles))
