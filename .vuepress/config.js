const path = require('path');

module.exports = {
    "title": "Vnotes",
    "description": "Wait a minute...",
    "dest": "public",
    "base": "/vnotes/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        ["link", { rel: "stylesheet", href: "/css/znote.css" }],
        ["link", { rel: "stylesheet", href: "/fonts/iconfont.css" }],
        // ["script", { src: "/js/myjs.js" }],

        // pwa
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/100_100.png' }],
        ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/100_100.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]

    ],
    "theme": "reco",
    "themeConfig": {
        "smoothScroll": true,
        "mode": "light",
        "valineConfig": {
            "appId": 'WrCISMBrRuK0wCX8W0jqmcRF-gzGzoHsz',
            "appKey": 'NBnDXsQga8OSvV7ssdRmggvQ',
        },
        "nav": [{
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },

            {
                "text": '文档',
                "icon": 'iconfont icon-wodeshequ',
                "items": [
                    { "text": '创造狮', "link": 'http://chuangzaoshi.com/' },
                    { "text": '印记中文', "link": 'https://docschina.org/' },
                    { "text": '搜图导航', "link": 'https://www.91sotu.com/' },

                ]
            },
            {
                "text": '社区',
                "icon": 'iconfont icon-wodeshequ',
                "items": [
                    { "text": 'Gitee', "link": 'https://gitee.com/GiteeFXJ', "icon": 'iconfont icon-gitee2' },
                    { "text": 'GitHub', "link": 'https://github.com/CodingFXJ', "icon": 'reco-github' },
                    { "text": 'HexoBlog', "link": 'https://codingfxj.github.io/', "icon": 'iconfont icon-hexo' },

                ]
            },
            {
                "text": "时线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": '宝箱',
                "icon": 'iconfont icon-tool-fill',
                "items": [{
                        "text": '在线编辑',
                        "items": [
                            { "text": 'JSRun', "link": 'http://jsrun.net/' },
                            { "text": 'CodePen', "link": 'https://codepen.io/' },
                            { "text": 'ProcessOn', "link": 'https://www.processon.com/' },
                        ]
                    },
                    {
                        "text": '图片相关',
                        "items": [
                            { "text": '图片素材', "link": 'https://www.pexels.com/zh-cn/' },
                            { "text": '图片压缩', "link": 'https://tinypng.com/' },
                        ]
                    },


                ]
            },
            {
                "text": '酷站',
                "icon": 'iconfont icon-lianjiedian-connection-points',
                "items": [
                    { "text": 'Vnav', "link": 'http://codingfxj.3vhost.net/index.html' },
                    { "text": '小霸王', "link": 'https://www.yikm.net/' },
                    { "text": 'CyberMap', "link": 'https://cybermap.kaspersky.com/' },
                    { "text": 'weavesilk', "link": 'http://weavesilk.com/' },
                    { "text": 'windows93', "link": 'http://www.windows93.net/' },
                    { "text": 'WebGL-Fluid', "link": 'https://paveldogreat.github.io/WebGL-Fluid-Simulation/' },

                ]
            }

        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ],
            "sidebarDepth": 3,
        },
        // "sidebar": "auto",

        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "type": "blog",
        "friendLink": [{
                "title": "HexoBlog",
                "link": "https://codingfxj.github.io/"
            },
            {
                "title": "vuepress",
                "link": "https://www.vuepress.cn/"
            }, {
                "title": "午后南杂",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "recotheme",
                "link": "https://vuepress-theme-reco.recoluan.com"
            },
            {
                "title": "znote",
                "link": "https://zpj80231.github.io/znote/ "
            },
            {
                "title": "平凡的你我 ",
                "link": "https://reinness.com/ "
            },
            {
                "title": "月上秦少",
                "link": "https://docs.zkkysqs.top/"
            },
            {
                "title": "青春永不落幕",
                "link": "https://qcyblm.gitee.io/vuepress/"
            },
        ],
        // "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "含光君",
        "authorAvatar": "/avatar.png",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [

        ["vuepress-plugin-auto-sidebar"],
        // ["vuepress-plugin-nuggets-style-copy", {
        //     // copyText: "复制",
        //     copyText: "",
        //     tip: {
        //         content: "复制成功!"
        //     }
        // }],
        ['@vuepress/medium-zoom', {
            selector: '.content__default>img',
            options: {
                margin: 16
            }
        }],
        [
            'meting', {
                // auto: "https://xxxxxxxxxxxx", //你的歌单的链接，网页歌单链接
                meting: {
                    mini: true,
                    fixed: true,
                    server: "netease", //歌单的平台、我这里是QQ音乐的平台
                    type: "playlist",
                    mid: "7013045772", //链接后面的id
                }, // 不配置该项的话不会出现全局播放器
                aplayer: {
                    autoplay: false,
                    // 吸底模式
                    fixed: true,
                    mini: true,
                    // 歌曲栏折叠
                    listFolded: true,
                    // 颜色
                    theme: '#67cc86',
                    // 播放顺序为随机
                    order: 'random',
                    // 初始音量
                    volume: 0.1,
                    // 关闭歌词显示
                    lrcType: 0
                },
                mobile: {
                    // 手机端去掉cover图
                    cover: false,
                }
            }
        ],
        ['@vuepress/plugin-pwa'],
		[
			'@vuepress/plugin-pwa-popup',
			{
				locales: {
					'/': {
						message: '发现新内容可用',
						buttonText: '刷新',
					},
				},
			},
		],
        // ['@vuepress/pwa', {
        //     serviceWorker: true,
        //     updatePopup: {
        //         message: "发现新内容可用",
        //         buttonText: "刷新"
        //     }
        // }],
        ['@vuepress-reco/vuepress-plugin-rss', {
            site_url: 'https://giteefxj.gitee.io/vnotes'
        }],
        [path.resolve(__dirname, './plugins/vuepress-plugin-nuggets-style-copy/index.js')],
    ],
}