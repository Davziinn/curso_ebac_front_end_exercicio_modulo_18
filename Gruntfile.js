module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
        development: {
        files: {
            'dev/styles/main.css': 'src/styles/main.less'
        }
        },
        production: {
        options: {
            compress: true
        },
        files: {
            'dist/styles/main.min.css': 'src/styles/main.less'
        }
        }
    },
    htmlmin: {
        dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
            'prebuild/index.html': 'src/index.html'
        }
        }
    },
    clean: ['prebuild'],

    uglify: {
        target: {
        files: {
            'dist/scripts/scripts.min.js': 'src/scripts/script.js'
        }
        }
}
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', []);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'clean', 'uglify']);
};
