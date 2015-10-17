

module.exports = function(grunt) {


	grunt.initConfig({
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'views/build/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'views/images/'
				}]
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['imagemin']);
};
