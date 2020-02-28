module.exports = {
    '/program/': [
        {
          title: '数据结构',
          collspsable: true,
          children: [
            '/program/dataStructure/dataStructure',
          ],
        },
        {
          title: '前端',
          collspsable: true,
          children: [
            '/program/front/vuePress',
          ],
        },
    ],
    '/books/': [
        {
          title: '书籍',
          collspsable: true,          
          children: [
            '/books/read/人间失格',
            '/books/read/断舍离',
            '/books/read/原则',
          ],
        },
    ],
    '/life/': [
        {
          title:'思考',
          collspable:true,
        },
        {
          title:'灵感',
          collspable:true,
        }
    ],
    // fallback
      '/': [
        '',        /* / */
    ]
  }