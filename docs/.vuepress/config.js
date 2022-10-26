const description = require('../../package.json').description

module.exports = {
    title: 'LaTeX 101',
    description: description,

    dest: 'website',

    head: [
        ['link', {
            rel: 'icon',
//            href: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAElJwv9JScL/SUnC/wAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAgAAAAUAAAADAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAIAAAAIAAAABAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASUnC/0lJwv8AAAACAAAACgAAAAYAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAgAAAAsAAAAIAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAMAAAAJAAAACAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/SUnC/wAAAAgAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAQAAAAQAAAAHAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAIAAAAEAAAABQAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASUnC/0lJwv8AAAABAAAABAAAAAMAAAAAAAAAAAAAAABJScL/SUnC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElJwv9JScL/AAAAAAAAAAMAAAACAAAAAAAAAAAAAAAASUnC/0lJwv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJScL/SUnC/wAAAAEAAAACAAAAAAAAAAEAAAAAAAAAAAAAAABJScL/SUnC/0lJwv8AAAAAAAAAAElJwv9JScL/SUnC/wAAAAAAAAABAAAAAAAAAAAAAAAYAAAAFwAAABYAAAATAAAAEQAAAA0AAAALAAAACQAAAAcAAAADAAAAAwAAAAMAAAABAAAAAAAAAAAAAAAA8BMAAP/5AADxiAAA5+AAAOfgAADn4AAA5+AAAOfgAACP8AAA5+AAAOfgAADn4AAA5+QAAOfhAABxiwAAAAcAAA==',
            href: 'data:image/x-icon;base64,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',
            type: 'image/x-icon'
        }]
    ],
    //theme: 'yuu',
    themeConfig: {
        logo: '/img/book.png',
        logowhite: '/img/book-white.png',
        logogreen: '/img/book-green.png',
        //themeConfig: {
	//  yuu: {
	//	disableThemeIgnore: true,
	//       },
        //},
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/startoff.html' },
            { text: 'Sandbox', link: '/sandbox.html', target:'_self', rel:'' },
	    { text: 'Cheat Sheet', link: '/cheatsheet.html'},	
            //{ text: 'ChangeLog', link: 'https://github.com/michael-brade/LaTeX.js/releases'},
            //{ text: 'GitHub', link: 'https://github.com/michael-brade/LaTeX.js' },
        ],
        search: true,
        sidebar: [
            '',                 // Home
	    'startoff',
	    'install',
	    'creating'
            //'test'
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
        displayAllHeaders: false,
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
	'@vuepress/back-to-top',
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
