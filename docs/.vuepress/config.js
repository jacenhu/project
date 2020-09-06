
module.exports={
    title:'Jacen\'s blog',
    description:'my personal blog',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {  // 增加一个自定义的 favicon(网页标签的图标)
          rel: 'icon',
          type: 'image/x-icon',
          href: './favicon.ico'
        }],
        ['link', { rel: 'apple-touch-icon', href: './favicon.ico' }], //适配移动端ico
      ],
    base:'/',
    markdown: {
      lineNumbers: true
    },
    themeConfig:{
      nav: require('./nav'),
      sidebar: require('./sidebar'),
    },
    plugins: {
        '@vuepress/active-header-links': {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': true,
        '@vuepress/nprogress': true
    }
}