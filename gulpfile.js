"use strict";

let gulp = require("gulp");
let webp = require("gulp-webp");

gulp.task("webp", function () {
  return gulp.src("img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("img/"));
});
