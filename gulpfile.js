var gulp = require('gulp');
var terser = require('gulp-terser');
var concat = require('gulp-concat');
var pump = require('pump');

var fileName = "Rainstorm";
var folderDestination = "dist/";
var folderDocs = "docs/assets/js/";

gulp.task("build-js", function (callback) {
	pump([
		gulp.src("src/Rainstorm.js"),
		terser(),
		concat(fileName + ".min.js"),
		gulp.dest(folderDestination),
		gulp.dest(folderDocs)
	], callback);
});

gulp.task("default", ["build-js"]);