require('dotenv').config();
require("babel-register");

const gulp = require('gulp');
const {bundleJS} = require('./tasks');

gulp.task('default',['browserify']);

gulp.task('browserify',bundleJS);
