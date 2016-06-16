const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');

export function bundleJS(){
  return browserify('./app/index.js')
      .transform("babelify", {presets: ['es2015']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(process.env.DIST_PATH))
}
