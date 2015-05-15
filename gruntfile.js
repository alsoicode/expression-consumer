module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-cafe-mocha');
    grunt.loadNpmTasks('grunt-env');

    grunt.initConfig({
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        cafemocha: {
            test: {
                src: 'test/*.js',
                options: {
                    ui: 'bdd',
                    reporter: 'nyan'
                }
            }
        }
    });

    grunt.registerTask('test', ['env:test', 'cafemocha:test']);
};
