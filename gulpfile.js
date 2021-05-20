var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");

gulp.task("build-css", function () {
  return gulp
    .src("scss/style.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest("css/"));
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", ["build-css"]);
});
