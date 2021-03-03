let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
    .sass('src/scss/main.scss', 'css')
    .setPublicPath('dist')
    .copy('src/index.html', 'dist/index.html');