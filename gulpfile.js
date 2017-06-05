const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack2 = require('webpack');
//const fs = require('fs');
//const path = require('path');

const webpackOptions = {
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: "source-map"
};

gulp.task('default', () =>
  gulp
    .src('app/index.js')
    .pipe(webpackStream(webpackOptions, webpack2))
    .pipe(gulp.dest('dist/'))
);
