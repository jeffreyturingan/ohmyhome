var elixir    = require('laravel-elixir');
var gulp      = require('gulp');
var clean     = require('gulp-clean');
var svg       = require('gulp-svgstore');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concat    = require('gulp-concat');
var server = require('gulp-server-livereload');
var jade = require('gulp-jade');

// pulls plugins from elixir
var $ = elixir.Plugins;
var Task = Elixir.Task;

var source = {
    dist: {
        assets: [
            "dist/js",
            "dist/images",
            "dist/css"
        ]
    },
    sass: {
        main: "main.sass",
        output: "dist/styles/main.css"
    },
    cssv: {
        file: [
            "bower_components/jquery-ui/themes/smoothness/jquery-ui.css",
            "bower_components/jquery-ui/themes/smoothness/theme.css"
        ],
        output: "dist/styles/vendors"
    },
    jadetemplate: {
        file: [
            "./assets/template/*.jade"
        ],
        output: "./"
    },
    js: {
        vendor: [
            "../../bower_components/jquery/dist/jquery.js",
            "../../bower_components/jquery-ui/jquery-ui.js",
            "../../assets/vendor/*.js"
        ],
        files: [
            "../../assets/js/main.js",
            "../../assets/js/modules/*.js"
        ],
        output: {
            vendor: "dist/scripts/vendors.js",
            file: "dist/scripts/main.js",
            folder: "dist/scripts",
            name: "main.js"
        }
    },
    images: {
        base : "assets/images/",
        files: ["assets/images/**/*"],
        dest : "dist/images/",
        icons: {
            files: "assets/images/icons/**/*.svg",
            dest: "dist/images/"
        }
    }
};

elixir.config.assetsPath = 'assets/';
elixir.config.publicPath = 'dist/';
elixir.config.css.sass.folder = 'sass';


elixir.config.css.autoprefix = {
    enabled: true,
    options: {
        cascade: true,
        browsers: ['last 2 versions', '> 5%', 'Safari >= 6.1', 'ie > 11']
    }
};




elixir.extend('cssvendor', function (src, dest) {
    return new Task('cssvendor', function () {
        src = src || source.cssv.file;
        dest = dest || source.cssv.output;

        return gulp.src(src)
            .pipe(concat('vendor.css'))
            .pipe(gulp.dest(dest))

    }).watch(src);
});

elixir.extend('jtemplates', function (tsrc, dest) {
    return new Task('jtemplates', function () {

        tsrc = tsrc || source.jadetemplate.file;
        dest = dest || source.jadetemplate.output;

        var YOUR_LOCALS = {};

        return gulp.src(tsrc)
            .pipe(jade({
                locals: YOUR_LOCALS,
                pretty: true
            }))
            .pipe(gulp.dest(dest))
    }).watch(['./assets/template/*.jade','./assets/template/**/*.jade']);
});


elixir.extend('clean', function () {
    return new Task('clean', function () {
        return gulp.src(source.public.assets)
            .pipe(clean({
                force: true
            }))
    });
});


gulp.task('runserver', function () {
    return gulp.src('./')
        .pipe(server({
            livereload: true,
            open: true
        }));
});



/*
 |----------------------------------------------------------------
 | Combine SVGs
 |----------------------------------------------------------------
 |
 |
 */
elixir.extend('svgSprite', function (src, dest) {
    src = src || source.images.icons.files;
    dest = dest || source.images.icons.dest;

    return new Task('svgSprite', function () {
        return gulp.src(src)
            .pipe(svg({ inlineSvg: true }))
            .on('error', function () {
                new elixir.Notification('Combining SVGs Failed!');

                this.emit('end');
            })
            .pipe(new elixir.Notification('SVGs Combined!'))
            .pipe(gulp.dest(dest));

    }).watch(src);
});



elixir(function(mix) {
    mix.cssvendor()
        .svgSprite()
        .sass(source.sass.main, source.sass.output)
        .scripts(source.js.files, source.js.output.file)
        .scripts(source.js.vendor, source.js.output.vendor)
        .jtemplates();
});

