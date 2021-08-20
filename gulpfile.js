const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Saas task
function scssTask() {
  return src('src/styles/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript task
function jsTask() {
  return src('src/scripts/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync task
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch task
function watchTask() {
  watch('*.html', browsersyncReload);
  watch(['src/styles/*.scss', 'src/scripts/*.js'], series(scssTask, jsTask, browsersyncReload))
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browserSyncServe,
  watchTask
);
