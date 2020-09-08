# C++ Primer
[[toc]]


## 第一章 开始
（1）标准输入输出对象
| 对象 | 用途 |
| :---- | :---- |
| cin  | 标准输入 |
| cout | 标准输出 |
| ceer | 标准错误 |
| clog | 输出运行时的一般性消息 |

## 第十二章 变量和基本类型

P30-P46

数据类型是程序的基础。C++语言支持广泛的数据类型。

### 基本内置类型
#### 算术类型

| 类型 | 最小尺寸 |
| :--- | :--- |
| bool | 未定义 |
| char | 8位 | 
| w_char_t | 16位 |
| char16_t | 16位 |
| char32_t | 32位 |
| short | 16位 |
| int | 16位 |
| long | 32位 |
| long long | 64位 |
| float | 6位有效数字 |
| double | 10位有效数字 |
| long double | 10位有效数字 |

#### 类型转换

不要混用符号类型和无符号类型。

### 变量

#### 变量定义

（1）基本形式：

类型说明符，随后紧跟着一个或者多个变量名组成的列表，其中变量名以逗号分隔，最后以分号结束。

（2）初始值

在C++中，初始化和赋值是2个完全不同的操作。初始化的含义是创建变量的时候赋予一个初始值，而赋值的含义是把对象的当前值擦除，用一个新值来替代。两者区别很小。

（3）列表初始化

用花括号来初始化变量的方式，称为列表初始化。

（4）默认初始化

如果定义变量没有指定初始值，则变量被默认初始化。

::: tip

例外情况：

定义在函数体内部的内置类型变量将不被初始化，其值未定义。

建议初始化每个内置类型的变量。
::: 

#### 变量声明和定义的关系

变量声明：规定了变量的类型和名字。

变量定义：除声明之外，还需要申请存储空间。

如果想声明一个变量，而非定义它，需要使用extern关键词。

``` C++
extern int i;    // 声明i而非定义i
int j;           // 声明并定义j
```

::: tip
变量只能被定义一次，但可以被多次声明。
:::

#### 名字的作用域

作用域：C++中大多数作用域都用花括号分隔。

作用域中一旦声明了某个名字，它所嵌套的所有作用域都能访问该名字。同时，允许在内层作用域中重新定义外层作用域中有的名字。

::: warning
如果函数有可能用到某全局变量，则不宜再定义一个同名的局部变量。
:::

### 复合类型

> 定义:
复合类型是基于其他类型定义的类型。

#### 引用

引用：为对象起另外一个名字。

::: warning
引用必须被初始化。
引用本身不是对象，所以不能定义引用的引用。
引用要和绑定的对象严格匹配。
引用类型的初始值，必须是一个对象。
:::

#### 指针

指针：本身就是一个对象。允许对指针赋值和拷贝。指针无须在定义的时候赋值。

### const限定符
### 处理类型
### 自定义数据结构

## 第十六章 模板与泛型编程

P578-P630

（1）控制实例化

当编译器遇到extern模板声明时，它不会在本文件中生成实例化代码。将一个实例化声明为extern就表示承诺在程序其他位置有该实例化的一个非extern声明（定义）。对于一个给定的实例化版本，可能有多个extern声明，但必须只有一个定义。

（2）
模板是标准库的基础。

生成特定类或者函数的过程称为实例化。

（3）术语

类模板： 模板定义，可从它实例化出特定的类。类模板的定义以关键词template开始，后面跟尖括号对<和>，其内为一个用逗号分隔的一个或多个模板参数的列表，随后是类的定义。

函数模板： 模板定义，可从它实例化出特定函数。函数模板的定义以关键词template开始，后跟尖括号<和>，其内以一个用逗号分隔的一个或多个模板参数的列表，随后是函数的定义。
