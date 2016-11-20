var gulp    = require('gulp');
var concat  = require('gulp-concat');
var babel   = require('gulp-babel');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('js', function() {
  gulp.src('./app/content/assets/js/*')
      .pipe(plumber())
      .pipe(babel({presets: ['es2015']}))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./app/content/dist'));
});

gulp.task('watch', function() {
  gulp.watch('./app/content/assets/js/*', ['js']);
});

gulp.task('default', ['js', 'watch']);
