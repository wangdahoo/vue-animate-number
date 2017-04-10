const rollup = require('rollup').rollup
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const vue = require('rollup-plugin-vue')
const babel = require('rollup-plugin-babel')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const header = require('gulp-header')
const pkg = require('./package.json')

const dist = pkg.main.replace('.min', '')

rollup({
  entry: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
})
.then((bundle) => {
  return bundle.write({
    format: 'umd',
    moduleName: 'VueAnimateNumber',
    dest: dist
  })
})
.then(() => {
  let banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n')

  gulp.src(dist)
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
})
.catch(err => {
  console.log(err)
})
