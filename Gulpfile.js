var gulp = require("gulp");
var prettier = require("@o2team/gulp-prettier-eslint");
var guppy = require("git-guppy");
var watch = require("gulp-watch");
var bucket = require("gulp-bucket");
var ignore = require("gulp-ignore");
var load = require("gulp-load-plugins");
var plumber = require("gulp-plumber");

var paths = {
  backsrc: ""
};

gulp.task("default", function() {
  console.log("Hello World!");
});
