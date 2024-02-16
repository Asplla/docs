import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { redirectPlugin } from '@vuepress/plugin-redirect'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler({
    // 
  }),
  lang: 'zh-CN',
  title: '易讯云',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['link', { rel: 'stylesheet', href: '/src/css/global.css' }],
  ],
  theme: defaultTheme({
    logo: '/src/img/logo_light.svg',
    logoDark: '/src/img/logo_dark.svg',
    navbar: [
      {
        text: 'Discuz!开发文档',
        link: '/discuz',
        activeMatch: '^/discuz/',
      },
      {
        text: '智能家庭系统文档',
        link: '/home',
        activeMatch: '^/home/',
      },
    ],
    sidebar: {
      '/discuz/': [
        {
          text: '编码规范',
          collapsible: true,
          children: [
            '/discuz/coderule/coderule.md',
            '/discuz/coderule/sql.md',
          ],
        },
        {
          text: '模板机制',
          collapsible: true,
          children: [
            '/discuz/template/dev.md',
            '/discuz/template/coderule.md',
            '/discuz/template/css.md',
            '/discuz/template/sample.md',
          ],
        },
        {
          text: '插件机制',
          collapsible: true,
          children: [
            '/discuz/plugin/dev',
            '/discuz/plugin/module',
            '/discuz/plugin/vars',
            '/discuz/plugin/hook',
            '/discuz/plugin/specialthread',
            '/discuz/plugin/classes',
            '/discuz/plugin/otherModule',
            '/discuz/plugin/install',
            '/discuz/plugin/language',
            '/discuz/plugin/notice',
          ],
        },
      ],
      '/home/': [
        {
          text: 'Docker',
          collapsible: true,
          children: [
            '/home/docker/install.md',
            '/home/docker/update.md',
          ],
        },
        {
          text: 'v2rayA',
          collapsible: true,
          children: [
            '/home/v2raya/install.md',
            '/home/v2raya/update.md',
          ],
        },
        {
          text: 'HomeAssistant',
          collapsible: true,
          children: [
            '/home/home-assistant/install.md',
            '/home/home-assistant/update.md',
            '/home/home-assistant/mysql.md',
            '/home/home-assistant/hacs.md',
          ],
        },
        {
          text: 'Cpolar',
          collapsible: true,
          children: [
            '/home/cpolar/install.md',
          ],
        },
        {
          text: 'Alist',
          collapsible: true,
          children: [
            '/home/alist/script.md',
            '/home/alist/install.md',
            '/home/alist/update.md',
            '/home/alist/uninstall.md',
          ],
        },
        {
          text: '反向代理至公网',
          collapsible: true,
          children:[
            '/home/ddns-go/'
          ],
        },
      ],
    },
    sidebarDepth: 3,
  }),
  plugins: [
    redirectPlugin({
      config: {
        '/discuz': '/discuz/coderule/coderule.md',
        '/home': '/home/home-assistant/install.md',
      },
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})