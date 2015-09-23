var gulp      = require('gulp');
var less      = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var bsync     = require('browser-sync');
var reload    = bsync.reload;
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');
var uglify    = require('gulp-uglify');
var del       = require('del');

// useful file paths
var path = {
    theme   : 'githubish',
    tmp     : '.tmp',       // Pre-processing tmp dir. Use as needed.
    src     : 'src',        // Base source code. Where any and all code goes.
    vendor  : 'src/vendor',
    less    : 'src/less',       // Used for the pre-deploy production test build.
    js      : 'js',
    css     : 'css',
    img     : 'img',
    fonts   : 'fonts',
    cache   : 'cache',
    root    : '../../'
};

// Cleans up any directories from old builds
gulp.task('clean', function () {
    return del([path.css, path.fonts, path.js, path.root + path.cache + '/*'], {force: true})
  });

gulp.task('styles', function () {
  return gulp.src(path.less + '/style.less')
    .pipe(less())
    .pipe(gulp.dest(path.css))
    .pipe(rename('styles.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.css));
});

gulp.task('fonts', function () {
    gulp.src([path.vendor + '/font-awesome/fonts/*', path.vendor + '/bootstrap/dist/fonts/*', path.vendor + '/open-sans-fontface/fonts/**/*'])
        .pipe(gulp.dest(path.fonts));
//        .pipe(reload({
  //          stream: true
    //    }));
});

gulp.task('js', function () {
    return gulp.src([
         path.vendor + '/jquery/dist/jquery.js',
         path.vendor + '/raphael/raphael.js',
         path.vendor + '/bootstrap/dist/js/bootstrap.js',
         path.vendor + '/codemirror/lib/codemirror.js',
         path.vendor + '/showdown/dist/showdown.js',
         path.src + '/' + path.js + '/main.js',
         path.src + '/' + path.js + '/networkGraph.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.js))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.js));
});

gulp.task('jsxtra', function () {
  gulp.src([path.vendor + '/html5shiv/dist/html5shiv.min.js', path.vendor + '/showdown/dist/showdown.js.map'])
    .pipe(gulp.dest(path.js));
});

gulp.task('serve', ['build'], function() {
    bsync({
        notify: false,
        port: 9000,
        server: {
            baseDir: [path.dist, path.src]
        }
    });

    // watch for changes
    gulp.watch(path.src + '/' + path.js + '/**/*.js', ['js']);
    gulp.watch(path.src + '/' + path.less + '/**/*.less', ['less']);
});

gulp.task('build', ['js', 'jsxtra', 'fonts', 'styles'], function() {
//    return gulp.src(path.dist + '/**/*').pipe($.size({
//        title: 'build',
//        gzip: true
//    }));
});

gulp.task('default', ['clean'], function() {
    gulp.start('serve');
});

/**
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/jquery.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/raphael.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/bootstrap.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/codemirror.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/showdown.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/table.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/main.js"></script>
<script src="{{ app.request.basepath }}/themes/{{ app.theme }}/js/networkGraph.js"></script>
*/