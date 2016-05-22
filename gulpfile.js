// include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
  return gulp.src('css/exampleless.less')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css/exless/'))
    .pipe(browserSync.reload({
      stream: true}))
});



gulp.task('less', function () {
  return gulp.src(['./less/*.less', '!./less/_*.*'])
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true}))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'D:/Projects/Github/Marshmallow-Lab/'
    },
  })
})


gulp.task('watch', ['browserSync', 'less'], function(){
  gulp.watch('less/*.less', ['less']);
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/*.js', browserSync.reload);
  // Other watchers
})


// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })
