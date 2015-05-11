var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

var source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify');

var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Sass Converter and CSS Minifier
gulp.task('transformSass', function gulpTransformSass() {
  return gulp.src('./app/assets/styles/*.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ errLogToConsole: true }))
    .on('error', function sassError(err) { gutil.log(err); this.emit('end'); })
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/build'))
    .pipe(reload({ stream: true }));
});


// Browserifier and Babelifier
gulp.task('transformJsx', function gulpTransformJsx() {
  var bundler = browserify({ debug: true })
    .add('./app/assets/scripts/app.jsx')
    .transform(babelify)
    .require('./app/assets/scripts/app.jsx', { entry: true });

  return bundler.bundle()
    .on('error', function bundlerError(err) { gutil.log(err); this.emit('end'); })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/build'))
    .pipe(reload({ stream: true }));
});


// Task Grouper
gulp.task('transformAssets', ['transformSass', 'transformJsx']);


// Task Watcher
gulp.task('watch', ['transformAssets'], function gulpWatch() {
  gulp.watch('app/assets/**/*.scss', ['transformSass']);
  gulp.watch('app/assets/**/*.jsx', ['transformJsx']);
  gulp.watch('TESTFIELD/**/*.jsx', ['transformJsx']);
});


// Browser-sync Monitor
gulp.task('bsMonitor', ['watch'], function gulpBSMonitor() {
  browserSync({
    server: {
      baseDir: './app'
    }
  });
});


// Default Gulp Task
gulp.task('default', ['bsMonitor']);
