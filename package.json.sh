#!/bin/bash

npx lsc -cj > package.json <<EOF

name: 'latex.js'
description: 'JavaScript LaTeX to HTML5 translator'
version: '0.12.4'

author:
    'name': 'Michael Brade'
    'email': 'brade@kde.org'

keywords:
    'pegjs'
    'latex'
    'parser'
    'html5'

bin:
    'latex.js': './bin/latex.js'

## we must not use require in .js files anymore when enabling this,
## nor can .ls files be imported as modules in tests
## bugs: https://github.com/mochajs/mocha/issues/4267, https://github.com/nodejs/node/issues/33226
# type:
#     'module'

module:
    './dist/latex.mjs'

main:
    './dist/latex.js'

exports:
    import: './dist/latex.mjs'
    require: './dist/latex.js'

browser:
    './dist/latex.js'

files:
    'bin/latex.js'
    'dist/latex.js'
    'dist/latex.js.map'
    'dist/latex.mjs'
    'dist/latex.mjs.map'
    'dist/css/'
    'dist/fonts/'
    'dist/js/'
    'dist/packages/'
    'dist/documentclasses/'

scripts:
    clean: 'rimraf dist bin test/coverage test/test-results.xml docs/.vuepress/public/js;'

    devbuild: "
        rimraf 'dist/**/*.map';
        mkdirp dist/css;
        mkdirp dist/js;
        mkdirp dist/fonts;
        mkdirp dist/documentclasses;
        mkdirp dist/packages;
        touch dist/documentclasses/.keep;
        touch dist/packages/.keep;
        rsync -a src/css/ dist/css/;
        rsync -a src/fonts/ dist/fonts/;
        rsync -a node_modules/katex/dist/fonts/*.woff2 dist/fonts/;
        rsync -a src/js/ dist/js/;
        mkdirp bin;
        lsc -bc --no-header -m embedded -p src/cli.ls > bin/latex.js;
        chmod a+x bin/latex.js;
	    rollup -c;
    "

    build: 'NODE_ENV=production npm run devbuild;'


    # docs/website and playground

    devdocs: "
        npm run devbuild;
        vuepress dev docs --no-clear-screen;
    "

    docs: "
        npm run build;

        [ ! -d website ] && git worktree add website gh-pages;
        mv website/.git .website.git;
        vuepress build docs;
        mv .website.git website/.git;

        cd website;
        git add .;
        git commit -m 'regenerated website';
    "


    # unit tests

    test:  'mocha test/*.ls;'
    iron:  'iron-node node_modules/.bin/_mocha test/*.ls;'

    testc: "
        nyc --include=bin --include=src --include=dist -e ls --reporter=html --reporter=text --reporter=lcovonly --report-dir=test/coverage \
            npx mocha -i -g screenshot --reporter mocha-junit-reporter --reporter-options mochaFile=./test/test-results.xml test/*.ls
            &&
            npx mocha -g screenshot --reporter mocha-junit-reporter --reporter-options mochaFile=./test/screenshots/test-results.xml test/*.ls;
    "
    codecov: 'codecov;'

dependencies:
    ### CLI dependencies

    'commander': '8.x'
    'fs-extra': '10.x'
    'js-beautify': '1.14.x'
    'stdin': '*'

    'hyphenation.en-us': '*'
    'hyphenation.de': '*'

    'svgdom': '^0.1.8'
    #'xmldom': '0.3.x'
    #'jsdom': '16.x'
    #'cheerio': '1.0.x'

devDependencies:
    ### actual runtime dependencies, but bundled by rollup

    'he': '1.2.x'
    'katex': '0.13.13'
    '@svgdotjs/svg.js': '3.x',

    'hypher': '0.x'
    'lodash': '4.x'

    'livescript': 'https://github.com/michael-brade/LiveScript'
    'livescript-transform-esm': '^3.1.0'
    'livescript-transform-implicit-async': '^1.1.0'
    'livescript-transform-object-create': '^1.1.0'

    ### building

    'pegjs': '0.10.x'
    'mkdirp': '1.0.x'
    'rimraf': '3.x'
    'tmp': '0.x'
    'glob': '^7.1.4'

    ### docs

    'vuepress': '1.8.x'
    'split-grid': '1.0.x'
    'codemirror': '5.62.x'
    'vue-codemirror': '4.0.x'
    'raw-loader': '4.0.x'

    ### bundling

    "rollup": "2.56.x"
    "@rollup/plugin-commonjs": "20.0.x"
    "@rollup/plugin-node-resolve": "13.0.x"
    "rollup-plugin-terser": "7.0.x"
    "rollup-plugin-visualizer": "5.5.x"

    ### testing

    'mocha': '9.x'
    'mocha-junit-reporter': '2.x'
    'chai': '4.x'
    'chai-as-promised': '7.x'
    'slugify': '1.6.x'
    'decache': '4.6.x'

    'puppeteer': '10.2.x'
    'pixelmatch': '5.2.x'

    'nyc': '15.x'
    'codecov': '3.x'

    'serve-handler': '6.x'

mocha:
    require: 'livescript'
    file: 'test/lib/setup.ls'
    reporter: 'spec'
    inlineDiffs: true
    timeout: 10000
    ui: 'bdd'
    checkLeaks: true
    globals: 'firefox,chrome'
    sort: true



repository:
    type: 'git'
    url: 'git+https://github.com/michael-brade/LaTeX.js.git'

license: 'MIT'

bugs:
    url: 'https://github.com/michael-brade/LaTeX.js/issues'

homepage: 'https://latex.js.org'

engines:
    node: '>= 14.0'

EOF
