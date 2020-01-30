参考链接：
https://coding.net/help/doc/project/markdown.html#i

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题


> 这是第一级引用。
>
> > 这是第二级引用。
>
> 现在回到第一级引用。


- Red
- Green
- Blue

1. Red
2. Green
3. Blue



```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```


*Coding，让开发更简单*
_Coding，让开发更简单_

**Coding，让开发更简单**
__Coding，让开发更简单__


First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell





First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right


这是分隔线上部分内容
---
这是分隔线上部分内容


--------

上标:
a<sup>2</sup>

下标: 
a<sub>2</sub>




```
数学公式对应的markdown语法
https://blog.csdn.net/sanqima/article/details/48576361
```


>写文章
* 首行偏移 emsp;
* 文字居中 <center>这一行需要居中</center>
* 左对齐  <p align="left">左对齐</p>



![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加


![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/
u=702257389,1274025419&fm=27&gp=0.jpg "区块链")



[超链接名](超链接地址 "超链接title")
title可加可不加

[简书](http://jianshu.com)
[百度](http://baidu.com)














