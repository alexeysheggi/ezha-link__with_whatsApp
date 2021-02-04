var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("css/style.css"))
    .pipe(gulp.dest('dist/'));
});

const cleanCSS = require('gulp-clean-css');

gulp.task('default', () => {
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'));
});

