var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
  copy: {
    src: ['src/**/*', '!src/sass'],
    dest: 'dist'
  },
  sass: {
    src: 'src/sass/style.scss',
    dest: 'dist/css/style.css'
  }
};

gulp.task('copy', function () {
  gulp.src(paths.copy.src)
      .pipe(gulp.dest(paths.copy.dest));
});

gulp.task('copy:watch', function () {
  gulp.watch(paths.copy.src, ['copy']);
});

gulp.task('sass', function () {
  gulp.src(paths.sass.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.sass.dest, ['sass']);
});

gulp.task('build', ['copy', 'sass']);

gulp.task('watch', ['build', 'copy:watch', 'sass:watch']);

gulp.task('default', ['watch']);