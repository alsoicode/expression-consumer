module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-cafe-mocha');
    grunt.loadNpmTasks('grunt-api-benchmark');
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
        },
        api_benchmark: {
            api: {
                options: {
                    output: 'generated',
                },
                files: {
                    'output.html': 'benchmark/config.json'
                }
            }
        }
    });

    grunt.registerTask('test', ['env:test', 'cafemocha:test']);
    grunt.registerTask('benchmark', ['api_benchmark']);
};
