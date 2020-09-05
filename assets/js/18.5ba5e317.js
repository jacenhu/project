(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{398:function(a,t,r){"use strict";r.r(t);var e=r(42),h=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"数据结构-c-language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-c-language"}},[a._v("#")]),a._v(" 数据结构（C language）")]),a._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#chapter1-绪论"}},[a._v("Chapter1 绪论")]),r("ul",[r("li",[r("a",{attrs:{href:"#计算"}},[a._v("计算")])]),r("li",[r("a",{attrs:{href:"#计算模型"}},[a._v("计算模型")])]),r("li",[r("a",{attrs:{href:"#大o记号"}},[a._v("大O记号")])]),r("li",[r("a",{attrs:{href:"#算法分析"}},[a._v("算法分析")])]),r("li",[r("a",{attrs:{href:"#迭代与递归"}},[a._v("迭代与递归")])]),r("li",[r("a",{attrs:{href:"#动态规划"}},[a._v("动态规划")])])])]),r("li",[r("a",{attrs:{href:"#chapter2-向量"}},[a._v("Chapter2 向量")])]),r("li",[r("a",{attrs:{href:"#chapter3-列表"}},[a._v("Chapter3 列表")])]),r("li",[r("a",{attrs:{href:"#chapter4-栈与队列"}},[a._v("Chapter4 栈与队列")])]),r("li",[r("a",{attrs:{href:"#chapter5-二叉树"}},[a._v("Chapter5 二叉树")]),r("ul",[r("li",[r("a",{attrs:{href:"#先序遍历"}},[a._v("先序遍历")])]),r("li",[r("a",{attrs:{href:"#中序遍历"}},[a._v("中序遍历")])]),r("li",[r("a",{attrs:{href:"#层次遍历"}},[a._v("层次遍历")])])])]),r("li",[r("a",{attrs:{href:"#chapter6-图"}},[a._v("Chapter6 图")]),r("ul",[r("li",[r("a",{attrs:{href:"#概述"}},[a._v("概述")])]),r("li",[r("a",{attrs:{href:"#邻接矩阵"}},[a._v("邻接矩阵")])]),r("li",[r("a",{attrs:{href:"#广度优先搜索"}},[a._v("广度优先搜索")])]),r("li",[r("a",{attrs:{href:"#深度优先搜索"}},[a._v("深度优先搜索")])])])]),r("li",[r("a",{attrs:{href:"#chapter7-二叉搜索树bst"}},[a._v("Chapter7 二叉搜索树BST")])]),r("li",[r("a",{attrs:{href:"#chapter8-高级搜索树"}},[a._v("Chapter8 高级搜索树")])]),r("li",[r("a",{attrs:{href:"#chpater9-词典"}},[a._v("Chpater9 词典")])]),r("li",[r("a",{attrs:{href:"#chapter10-优先级队列"}},[a._v("Chapter10 优先级队列")]),r("ul",[r("li",[r("a",{attrs:{href:"#需求与动机"}},[a._v("需求与动机")])])])]),r("li",[r("a",{attrs:{href:"#chapter11-串"}},[a._v("Chapter11 串")]),r("ul",[r("li",[r("a",{attrs:{href:"#adt"}},[a._v("ADT")])])])]),r("li",[r("a",{attrs:{href:"#chapter12-排序"}},[a._v("Chapter12 排序")]),r("ul",[r("li",[r("a",{attrs:{href:"#快速排序quiksort"}},[a._v("快速排序quiksort")])])])])])]),r("p"),a._v(" "),r("h2",{attrs:{id:"chapter1-绪论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter1-绪论"}},[a._v("#")]),a._v(" Chapter1 绪论")]),a._v(" "),r("h3",{attrs:{id:"计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算"}},[a._v("#")]),a._v(" 计算")]),a._v(" "),r("ul",[r("li",[a._v("computer science 实际上是computing science")]),a._v(" "),r("li",[a._v("绳索计算机：工具以及可以重复的步骤")]),a._v(" "),r("li",[a._v("尺规计算机")]),a._v(" "),r("li",[a._v("算法：计算=信息处理")])]),a._v(" "),r("blockquote",[r("p",[a._v("借助某种工具，遵照一定规则，以明确而机械的形式进行。")])]),a._v(" "),r("ul",[r("li",[a._v("计算模型=计算机=信息处理工具")]),a._v(" "),r("li",[a._v("算法：在特定计算模型下，解决特定问题的指令序列。")])]),a._v(" "),r("blockquote",[r("p",[a._v("什么是好的算法：算法需要正确性、确定性、可行性、有穷性")])]),a._v(" "),r("h3",{attrs:{id:"计算模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算模型"}},[a._v("#")]),a._v(" 计算模型")]),a._v(" "),r("h3",{attrs:{id:"大o记号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大o记号"}},[a._v("#")]),a._v(" 大O记号")]),a._v(" "),r("ul",[r("li",[a._v("主流长远")])]),a._v(" "),r("ol",[r("li",[a._v("好读书不求甚解，没有会意，便欣然忘食。 --陶渊明")]),a._v(" "),r("li",[a._v("随着问题规模的增大，计算成本的增长"),r("em",[a._v("趋势")]),a._v("。我们是观察主要的、长远的变化趋势。")])]),a._v(" "),r("ul",[r("li",[a._v("大O记号\nT(n)=O(f(n)), 存在c>0,当n>>2后，有T(n)< c * f(n)")])]),a._v(" "),r("h3",{attrs:{id:"算法分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#算法分析"}},[a._v("#")]),a._v(" 算法分析")]),a._v(" "),r("h3",{attrs:{id:"迭代与递归"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#迭代与递归"}},[a._v("#")]),a._v(" 迭代与递归")]),a._v(" "),r("h3",{attrs:{id:"动态规划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[a._v("#")]),a._v(" 动态规划")]),a._v(" "),r("h2",{attrs:{id:"chapter2-向量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter2-向量"}},[a._v("#")]),a._v(" Chapter2 向量")]),a._v(" "),r("h2",{attrs:{id:"chapter3-列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter3-列表"}},[a._v("#")]),a._v(" Chapter3 列表")]),a._v(" "),r("h2",{attrs:{id:"chapter4-栈与队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter4-栈与队列"}},[a._v("#")]),a._v(" Chapter4 栈与队列")]),a._v(" "),r("h2",{attrs:{id:"chapter5-二叉树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter5-二叉树"}},[a._v("#")]),a._v(" Chapter5 二叉树")]),a._v(" "),r("h3",{attrs:{id:"先序遍历"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先序遍历"}},[a._v("#")]),a._v(" 先序遍历")]),a._v(" "),r("ul",[r("li",[a._v("半线性结构转变为线性结构")])]),a._v(" "),r("h3",{attrs:{id:"中序遍历"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中序遍历"}},[a._v("#")]),a._v(" 中序遍历")]),a._v(" "),r("h3",{attrs:{id:"层次遍历"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#层次遍历"}},[a._v("#")]),a._v(" 层次遍历")]),a._v(" "),r("ul",[r("li",[a._v("按照深度次序，由高到低访问")])]),a._v(" "),r("h2",{attrs:{id:"chapter6-图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter6-图"}},[a._v("#")]),a._v(" Chapter6 图")]),a._v(" "),r("h3",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),r("ul",[r("li",[a._v("G=(V, E)")])]),a._v(" "),r("blockquote",[r("p",[a._v("V为点集，E为边集;\nV-V 点与点之间的关系为邻接关系;\nV-E 点与边之间的关系为关联关系;")])]),a._v(" "),r("h3",{attrs:{id:"邻接矩阵"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵"}},[a._v("#")]),a._v(" 邻接矩阵")]),a._v(" "),r("h3",{attrs:{id:"广度优先搜索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索"}},[a._v("#")]),a._v(" 广度优先搜索")]),a._v(" "),r("h3",{attrs:{id:"深度优先搜索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索"}},[a._v("#")]),a._v(" 深度优先搜索")]),a._v(" "),r("ul",[r("li",[a._v("访问定点S，若S尚有未被访问的邻居，则任取其一u，递归执行DFS(u);否则，返回。")])]),a._v(" "),r("h2",{attrs:{id:"chapter7-二叉搜索树bst"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter7-二叉搜索树bst"}},[a._v("#")]),a._v(" Chapter7 二叉搜索树BST")]),a._v(" "),r("h2",{attrs:{id:"chapter8-高级搜索树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter8-高级搜索树"}},[a._v("#")]),a._v(" Chapter8 高级搜索树")]),a._v(" "),r("h2",{attrs:{id:"chpater9-词典"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chpater9-词典"}},[a._v("#")]),a._v(" Chpater9 词典")]),a._v(" "),r("h2",{attrs:{id:"chapter10-优先级队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter10-优先级队列"}},[a._v("#")]),a._v(" Chapter10 优先级队列")]),a._v(" "),r("h3",{attrs:{id:"需求与动机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求与动机"}},[a._v("#")]),a._v(" 需求与动机")]),a._v(" "),r("ul",[r("li",[a._v("场景：夜间门诊")])]),a._v(" "),r("h2",{attrs:{id:"chapter11-串"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter11-串"}},[a._v("#")]),a._v(" Chapter11 串")]),a._v(" "),r("h3",{attrs:{id:"adt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adt"}},[a._v("#")]),a._v(" ADT")]),a._v(" "),r("ul",[r("li",[a._v("定义:由来自字母表的字符构成的长度有限的序列")])]),a._v(" "),r("h2",{attrs:{id:"chapter12-排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chapter12-排序"}},[a._v("#")]),a._v(" Chapter12 排序")]),a._v(" "),r("h3",{attrs:{id:"快速排序quiksort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速排序quiksort"}},[a._v("#")]),a._v(" 快速排序quiksort")]),a._v(" "),r("ul",[r("li",[a._v("分而治之")])]),a._v(" "),r("blockquote",[r("p",[a._v("将序列分为2个子序列\n在子序列递归的排序知乎，原序列自然有序\n平凡解：只剩单个元素时，本身就是解\nquicksort的难点在于分")])])])}),[],!1,null,null,null);t.default=h.exports}}]);