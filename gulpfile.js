var gulp         = require('gulp');
var concat       = require('gulp-concat');
var babel        = require('gulp-babel');
var uglify       = require('gulp-uglify');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src('./app/content/src/css/*.css')
      .pipe(plumber())
      .pipe(autoprefixer())
      .pipe(concat('all.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('./app/content/assets/css'));
});

gulp.task('js', function() {
  gulp.src('./app/content/src/js/*.js')
      .pipe(plumber())
      .pipe(babel({
        presets: [['es2015', {
          test:     /\.js$/,
          loader:   'babel',
          exculude: /node_modules/,
          query: {
            compact: false
          }
        }]]
      }))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./app/content/assets/js'));
});

gulp.task('lib', function() {
  gulp.src('./app/content/src/js/lib/*.js')
      .pipe(plumber())
      .pipe(concat('lib.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./app/content/assets/js'));
});

gulp.task('fonts', function() {
  gulp.src('./app/content/src/fonts/**')
      .pipe(gulp.dest('./app/content/assets/fonts'));
});

gulp.task('img', function() {
  gulp.src('./app/content/src/img/**')
      .pipe(gulp.dest('./app/content/assets/img'));
});

gulp.task('watch', function() {
  gulp.watch(
    [
      './app/content/src/css/*.css',
      './app/content/src/js/*.js',
      './app/content/src/fonts/**',
      './app/content/src/img/**'
    ],
    [
      'css',
      'js',
      'lib',
      'fonts',
      'img'
    ]
  );
});

gulp.task('default', ['css', 'js', 'lib', 'fonts', 'img', 'watch']);
