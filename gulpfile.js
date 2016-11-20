var gulp         = require('gulp');
var concat       = require('gulp-concat');
var babel        = require('gulp-babel');
var uglify       = require('gulp-uglify');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('./app/content/src/css/*.css')
      .pipe(autoprefixer())
      .pipe(concat('all.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('./app/content/assets/css'));
});

gulp.task('js', function() {
  gulp.src('./app/content/src/js/*')
      .pipe(plumber())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./app/content/assets/js'));
});

// TODO: cannot watch the CSS files, fix this
gulp.task('watch', function() {
  gulp.watch(['./app/content/src/css/*.css', './app/content/src/js/*.js'], ['css', 'js']);
});

gulp.task('default', ['css', 'js', 'watch']);
