module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		cssmin: {
			target: {
				files: {
					"style/stylesheet.min.css": "style/style.css",
				},
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");
};
