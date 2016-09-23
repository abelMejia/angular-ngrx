var gulp = require('gulp')
var express = require("express");
var app = express();  //Instanciar
var del = require('del')
var rename = require("gulp-rename");
var path = require('path');
var request = require('request');
var fs = require('fs');

gulp.task('default', function () {
	var dev = './dev'
	var folderSrc = dev + '/pdf/';
	var folderDest = './public/';	

	var copy = function (dev, deploy, name) {
	  	gulp.src(dev)
	  	.pipe(rename(name))
	    .pipe(gulp.dest(deploy))
	}

	fs.readFile(dev + '/language.json', 'utf8', function(err, data) {
	    if( err ){
	        console.log(err)
	    }
	    else{
	    	var array = JSON.parse(data);

	        array.forEach(function (val, idx) {
				var src = val.src;
				var urlDest = val.dest;

				var name = path.basename(urlDest);
				var dest = path.dirname(urlDest);

				copy(
					folderSrc + src, 
					folderDest + dest,
					name	
				)
			})
	    }
	});
})

gulp.task('clean', function () {
    // Delete Temp Files & Folders
    del(['./public/*']);

})

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