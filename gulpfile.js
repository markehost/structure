var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }),
    del = require('del');


var paths = {
    scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
    images: 'client/img/**/*'
};


gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('all.min.js'))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
        .pipe(plugins.imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/img'));
});


gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['watch', 'scripts', 'images']);

