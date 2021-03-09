# Sharding分片技术及业界方案（未完）


## 定义（维基百科）

A database shard, or simply a shard, is a horizontal partition of data in a database or search engine. Each shard is held on a separate database server instance, to spread load.

数据库分片（或简称为分片）是数据库或搜索引擎中数据的**水平分区**。每个分片都保存在单独的数据库服务器实例上，以分散负载。


## Sharding 方式

* 1、基于键的分片
* 2、基于范围的分片
* 3、基于目录的分片

## 分片的好处
* 促进水平扩展
* 降低宕机风险

## 分片的缺点
* 数据热点问题，这种情况需要重新分片



## 参考资料
[1]Shard (database architecture)
https://en.wikipedia.org/wiki/Shard_(database_architecture)

[2]Understanding Database Sharding
https://www.digitalocean.com/community/tutorials/understanding-database-sharding

## 图片来源
[1]Understanding Database Sharding
https://www.digitalocean.com/community/tutorials/understanding-database-sharding
