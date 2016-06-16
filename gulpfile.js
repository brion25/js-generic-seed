require('dotenv').config();
require("babel-register");

const gulp = require('gulp-help')(require('gulp'));

const {
  browserifyTask,
  testTask,
  preTestTask,
  complexityTask
} = require('./tasks');

gulp.task('default',['help','test','browserify']);

gulp.task('pretest',preTestTask);
gulp.task('complexity',complexityTask);
gulp.task('test',['pretest'],testTask);
gulp.task('browserify',['complexity'],browserifyTask);
