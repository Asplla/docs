import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "WXHUB DOCS",
  description: "WXHUB DOCS",
  srcDir: './src',
  lastUpdated: true,
  themeConfig: {
    logo: { light: '/src/img/logo_light.svg', dark: '/src/img/logo_dark.svg' },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Discuz! 文档',
        items: [
          { text: 'Discuz! API文档', link: '/discuz/api/base/overview' },
          { text: 'Discuz! 开发文档', link: '/discuz/dev/coderule' },
        ]
      },
      { text: 'Home Service', link: '/home-server/asus/hosts' },
    ],

    sidebar: {
      '/discuz/api/': [
        {
          text: 'Discuz! API文档',
          items: [
            {
              text: '接口概览',
              link: '/discuz/api/base/overview'
            },
            {
              text: '请求结构',
              link: '/discuz/api/base/structure'
            },
            {
              text: '用户相关',
              collapsed: false,
              items: [
                {
                  text: 'POST 用户登录',
                  link: '/discuz/api/user/login',
                }
              ],
            }
          ]
        },
      ],
      '/discuz/dev/': [
        {
          text: 'Discuz! 开发文档',
          items: [
            {
              text: '编码规范',
              link: '/discuz/dev/coderule',
            },
            {
              text: '模板机制',
              collapsed: false,
              items: [
                {
                  text: '模板风格创建',
                  link: '/discuz/dev/template/create'
                },
                {
                  text: '模板解析语法',
                  link: '/discuz/dev/template/coderule'
                },
                {
                  text: '模板缓存与CSS缓存',
                  link: '/discuz/dev/template/css'
                },
                {
                  text: '内置常用CSS代码分析',
                  link: '/discuz/dev/template/samples'
                }
              ]
            },
            {
              text: '插件机制',
              collapsed: false,
              items: [
                {
                  text: '准备工作',
                  link: '/discuz/dev/plugin/ready'
                },
                {
                  text: '插件接口',
                  link: '/discuz/dev/plugin/module'
                },
                {
                  text: '参数读取',
                  link: '/discuz/dev/plugin/vars'
                },
                {
                  text: '页面嵌入',
                  link: '/discuz/dev/plugin/hook'
                },
                {
                  text: '特殊主题',
                  link: '/discuz/dev/plugin/specialthread'
                },
                {
                  text: '第三方拓展类',
                  link: '/discuz/dev/plugin/classes'
                },
                {
                  text: '其它模块',
                  link: '/discuz/dev/plugin/other_module'
                },
                {
                  text: '安装脚本',
                  link: '/discuz/dev/plugin/install'
                },
                {
                  text: '模板和语言包',
                  link: '/discuz/dev/plugin/language'
                },
                {
                  text: '注意事项',
                  link: '/discuz/dev/plugin/notice'
                }
              ]
            }
          ]
        }
      ],
      '/home-server/': [
        {
          text:'ASUS Router',
          collapsed: false,
          items: [
            {
              text: '华硕路由器修改hosts的完美解决方案',
              link: '/home-server/asus/hosts'
            }
          ]
        },
        {
          text:'Ubuntu Server',
          collapsed: false,
          items: [
            {
              text: 'Ubuntu系统盘扩展',
              link: '/home-server/ubuntu/disk_extend'
            }
          ]
        },
        {
          text:'Docker',
          collapsed: false,
          items: [
            {
              text: '安装',
              link: '/home-server/docker/install'
            },
            {
              text: '升级',
              link: '/home-server/docker/update'
            }
          ]
        },
        {
          text: 'v2rayA',
          collapsed: false,
          items: [
            {
              text: '安装',
              link: '/home-server/v2raya/install'
            },
            {
              text: '升级',
              link: '/home-server/v2raya/update'
            }
          ]
        },
        {
          'text': 'Home Assistant',
          collapsed: false,
          items: [
            {
              text: '安装',
              link: '/home-server/home-assistant/install'
            },
            {
              text: '升级',
              link: '/home-server/home-assistant/update'
            },
            {
              text: '使用MYSQL数据库',
              link: '/home-server/home-assistant/mysql'
            },
            {
              text: '安装HACS',
              link: '/home-server/home-assistant/hacs'
            },
            {
              text: '安装HACS极速版',
              link: '/home-server/home-assistant/hacs-china'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2014-2024 wxhub All rights reserved'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asplla/docs' }
    ]
  }
})
