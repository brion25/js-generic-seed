import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import tape from 'gulp-tape';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import tapColorize from 'tap-colorize';
import { inspect } from 'plato';

export function browserifyTask(){
  return browserify('./app/index.js')
    .transform("babelify", {presets: ['es2015']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(process.env.DIST_PATH));
}

export function preTestTask(){
  console.log(Instrumenter)
  return gulp.src(process.env.SRC_PATH)
    .pipe(istanbul({
      instrumenter: Instrumenter
    }))
    .pipe(istanbul.hookRequire());
}

export function testTask(){
  return gulp.src(process.env.TEST_PATH)
    .pipe(tape({
      reporter : tapColorize()
    }))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
}

export function complexityTask(){
  return inspect(process.env.SRC_PATH, process.env.COVERAGE_REPORT, {}, report => {
    console.log(`Code was analized!`);
  });
}
