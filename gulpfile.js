const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack2 = require('webpack');

const webpackOptions = {
  watch: false,
  output: {
    filename: 'bundle.js'
  }
};

gulp.task('default', () =>
  gulp
    .src('app/index.js')
    .pipe(webpackStream(webpackOptions, webpack2))
    .pipe(gulp.dest('dist/'))
);
