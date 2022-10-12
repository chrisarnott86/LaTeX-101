const description = require('../../package.json').description

module.exports = {
    title: 'LaTeX 101',
    description: description,

    dest: 'website',

    head: [
        ['link', {
            rel: 'icon',
            href: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAElJwv9JScL/SUnC/wAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAgAAAAUAAAADAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAIAAAAIAAAABAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASUnC/0lJwv8AAAACAAAACgAAAAYAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAgAAAAsAAAAIAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAMAAAAJAAAACAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/SUnC/wAAAAgAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAQAAAAQAAAAHAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAIAAAAEAAAABQAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASUnC/0lJwv8AAAABAAAABAAAAAMAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAMAAAACAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAEAAAACAAAAAAAAAAEAAAAAAAAAAAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAElJwv9JScL/SUnC/wAAAAAAAAABAAAAAAAAAAAAAAAYAAAAFwAAABYAAAATAAAAEQAAAA0AAAALAAAACQAAAAcAAAADAAAAAwAAAAMAAAABAAAAAAAAAAAAAAAA8BMAAP/5AADxiAAA5+AAAOfgAADn4AAA5+AAAOfgAACP8AAA5+AAAOfgAADn4AAA5+QAAOfhAABxiwAAAAcAAA==',
            type: 'image/x-icon'
        }]
    ],

    themeConfig: {
        logo: '/img/latexjs.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/startoff.html' },
            { text: 'Sandbox', link: '/sandbox.html', target:'_self', rel:'' },
            //{ text: 'ChangeLog', link: 'https://github.com/michael-brade/LaTeX.js/releases'},
            //{ text: 'GitHub', link: 'https://github.com/michael-brade/LaTeX.js' },
        ],
        search: false,
        sidebar: [
            '',                 // Home
	    'startoff' 
        ],

        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text'],
        //     {
        //         title: 'Group 1',
        //         collapsable: false,
        //         children: [
        //           '/'
        //         ]
        //       },
        //       {
        //         title: 'Group 2',
        //         children: [ /* ... */ ]
        //       }
        // ],
        sidebarDepth: 1,
        displayAllHeaders: true,
        activeHeaderLinks: true
    },

    markdown: {
        breaks: false,
        extendMarkdown: md => {
            //md.use(require('markdown-it-xxx'))
        }
    },

    plugins: [
        require('./assets.js'),
        '@maginapp/vuepress-plugin-katex',
	{
          delimiters: 'dollars'
        },
	['vuepress-plugin-code-copy', {staticIcon: true,
	color: '#006938'}]
    ],

    configureWebpack: (config, isServer) => {
        config.externals = {
            'svgdom': 'commonjs svgdom'
        }
    }
}
