module.exports = {
    '/program/': [
        {
          title: '数据结构',
          collspsable: true,
          children: [
            '/program/dataStructure/dataStructure',
            '/program/dataStructure/AlgorithmAndDataStructure',
          ],
        },
        {
          title: '前端',
          collspsable: true,
          children: [
            '/program/front/vuePress',
          ],
        },
        {
          title: '后端',
          collspsable: true,
          children: [
            '/program/end/开发环境配置',
            '/program/end/springBoot实践',
          ],
        },
        {
          title: 'C++',
          collspsable: true,
          children: [
            '/program/cpp/CppPrimer',
            '/program/cpp/vscodeCpp',
          ],
        },
        {
          title: 'other',
          collspsable: true,
          children: [
            '/program/other/harmonyPractice',
          ],
        },
        {
          title: '工具',
          collspsable: true,
          children: [
            '/program/tool/save',
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
            '/books/read/AI未来',
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