# 内存池设计相关参考

## 默认内存管理缺点
利用默认的内存管理操作符new/delete和函数malloc()/free()在堆上分配和释放内存会有一些额外的开销。
应用程序频繁地在堆上分配和释放内存，会导致性能的损失。并且会使系统中出现大量的内存碎片，降低内存的利用率。

## 内存分配算法
* 伙伴算法
* slab算法

## 开源内存池实现
### nginx的内存池
* github链接：https://github.com/nginx/nginx
* 简介：nginx [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, originally written byIgor Sysoev. For a long time, it has been running on many heavily loaded Russian sites includingYandex,Mail.Ru,VK, andRambler. According to Netcraft, nginx served or proxied25.20% busiest sites in November 2020.


### jemalloc
* github链接：https://github.com/jemalloc/jemalloc
* 简介：jemalloc is a general purpose malloc(3) implementation that emphasizes
fragmentation avoidance and scalable concurrency support.  jemalloc first came
into use as the FreeBSD libc allocator in 2005, and since then it has found its
way into numerous applications that rely on its predictable behavior.

### tcmalloc
* github链接：https://github.com/google/tcmalloc
* 简介：TCMalloc is Google's customized implementation of C's malloc() and C++'s operator new used for memory allocation within our C and C++ code. TCMalloc is a fast, multi-threaded malloc implementation.

## 本文参考资料
[1] 内存池的设计

https://chensongpoixs.github.io/2019/01/11/内存池的设计/#/

[2] 如何设计内存池？

https://www.zhihu.com/question/25527491


