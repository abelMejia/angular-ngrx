var $ = require('./config.json');
var gulp = require('gulp')
var express = require("express");
var app = express();  //Instanciar
var del = require('del')
var rename = require("gulp-rename");
var zip = require("gulp-zip");
var path = require('path');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var fs = require('fs');


gulp.task('copy', function () {
	var stream;
	var copy = function (dev, deploy, name) {
	  stream = gulp.src(dev)
	  	.pipe(rename(name))
	    .pipe(gulp.dest(deploy))
	}

	var ext = '.json';
	var array = require($.dev + '/' + $.json + ext);
	
	array.map(function(it) {
		var src = it.src;
		var urlDest = it.dest;

		var name = path.basename(urlDest);
		var dest = path.dirname(urlDest);

		copy(
			$.folderSrc + src, 
			$.folderDest + dest,
			name	
		)
	});

	return merge(stream);
});

gulp.task('zip', function () {
	var FILES = fs.readdirSync('./public/');

	FILES.map( function(file) {
		console.log(file);
		return gulp.src('./public/'+ file + '/**')
			.pipe(zip(file + '.zip'))
			.pipe(gulp.dest('./public/'))
	}) 
});


gulp.task('clean', function () {
    // Delete Temp Files & Folders
    del(['./public/**/*']);

});

gulp.task('default', function(cb){
	runSequence('copy', 'zip',cb);
}); 

gulp.task('express', function () {
	var PORT = 4000
	var URL = '/public'

	//Ruteo
	app
	.use(express.static(__dirname + URL))
	.get('/', function (req, res) {
		res.sendFile(path.resolve(__dirname, URL))
	})
	.listen(4000, function () {  //Escuchar
		console.log("server running at http:%d",PORT)
	})
})