var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix        
    .scripts([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/metisMenu/dist/metisMenu.js',
            'bower_components/jquery-slimscroll/jquery.slimscroll.js',
			"resources/assets/js/plugins/flot/jquery.flot.js",
			"resources/assets/js/plugins/flot/jquery.flot.tooltip.min.js",
			"resources/assets/js/plugins/flot/jquery.flot.spline.js",
			"resources/assets/js/plugins/flot/jquery.flot.resize.js",
			"resources/assets/js/plugins/flot/jquery.flot.pie.js",

			"resources/assets/js/plugins/peity/jquery.peity.min.js",
			"resources/assets/js/demo/peity-demo.js",

			"resources/assets/js/inspinia.js",
			"resources/assets/js/plugins/pace/pace.min.js",

			"resources/assets/js/plugins/jquery-ui/jquery-ui.min.js",
			"resources/assets/js/plugins/gritter/jquery.gritter.min.js",
			"resources/assets/js/plugins/sparkline/jquery.sparkline.min.js",
			"resources/assets/js/demo/sparkline-demo.js",

			"resources/assets/js/plugins/chartJs/Chart.min.js",
			"resources/assets/js/plugins/toastr/toastr.min.js",
        ], 'public/js/app.js', './')

        .styles([
        	'./bower_components/bootstrap/dist/css/bootstrap.css',
            './bower_components/font-awesome/css/font-awesome.css',
            './bower_components/toastr/toastr.css',
            './bower_components/jquery.gritter/css/jquery.gritter.css',
            './bower_components/animate.css/animate.css',
            'resources/assets/css/style.css',
        ], 'public/css/app.css', './')
        .copy([
            'bower_components/bootstrap-sass/assets/fonts/bootstrap'
            ],'public/build/fonts/bootstrap')
        .copy([
            'bower_components/font-awesome/fonts'
        ], 'public/build/fonts/')
        .copy([
            'bower_components/bootstrap-sass/assets/fonts/bootstrap'
            ],'public/fonts/bootstrap')
        .copy([
            'bower_components/font-awesome/fonts'
        ], 'public/fonts/')
        .copy('resources/assets/images', 'public/images')
        .copy('resources/assets/images', 'public/build/images')
        .version(['public/css/app.css', 'public/js/app.js', 'public/images']);
});
