# 内存池设计相关参考

## 默认内存管理缺点
利用默认的内存管理操作符new/delete和函数malloc()/free()在堆上分配和释放内存会有一些额外的开销。
应用程序频繁地在堆上分配和释放内存，会导致性能的损失。并且会使系统中出现大量的内存碎片，降低内存的利用率。

## 内存分配算法
### 伙伴算法
* 简介：The buddy memory allocation technique is a memory allocation algorithm that divides memory into partitions to try to satisfy a memory request as suitably as possible. This system makes use of splitting memory into halves to try to give a best fit. According to Donald Knuth, the buddy system was invented in 1963 by Harry Markowitz, and was first described by Kenneth C. Knowlton (published 1965).

### slab算法
* 简介：
The basic idea behind the slab allocator is to have caches of commonly used objects kept in an initialised state available for use by the kernel. Without an object based allocator, the kernel will spend much of its time allocating, initialising and freeing the same object. The slab allocator aims to to cache the freed object so that the basic structure is preserved between uses

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


[3] What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?

https://stackoverflow.com/questions/9866145/what-are-the-differences-between-and-reasons-to-choose-tcmalloc-jemalloc-and-m

[4] Memory_pool

https://en.wikipedia.org/wiki/Memory_pool

[5] A Scalable Concurrent malloc(3) Implementation for FreeBSD

https://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf


[6] Chapter 8  Slab Allocator

https://www.kernel.org/doc/gorman/html/understand/understand011.html

