# 分布式存储系统Ceph

**声明:**
本文为Ceph学习笔记，仅作学习交流使用。

## 1 Ceph简介及使用场景介绍
### 1.1 Ceph简介
* 定义：Ceph 是一个统一的分布式存储系统。
* 特点：高性能、高可靠性、高可扩展性。
* 三种存储接口：块存储、文件存储、对象存储。

### 1.2 Ceph核心组件
Ceph核心组件
[Intro to Ceph](https://docs.ceph.com/en/latest/start/intro/)
 > A Ceph Storage Cluster requires at least one Ceph Monitor, Ceph Manager, and Ceph OSD (Object Storage Daemon). The Ceph Metadata Server is also required when running Ceph File System clients.
一个Ceph存储集群至少需要一个Ceph Monitor，Ceph Manager 和Ceph OSD（对象存储守护程序）。 当运行Ceph文件系统客户端时，还需要Ceph Metadata Server。

| 组件 | 作用 |
| --- | --- |
| Monitor | 一个 Ceph 集群需要多个 Monitor 组成的小集群，它们通过 Paxos 同步数据，用来保存 OSD 的元数据。 |
| OSD | OSD 全称 Object Storage Device，也就是负责响应客户端请求返回具体数据的进程。一个 Ceph 集群一般都有很多个 OSD。 |
| MDS | MDS 全称 Ceph Metadata Server，是 CephFS 服务依赖的元数据服务。|
| Object | Ceph 最底层的存储单元是 Object 对象，每个 Object 包含元数据和原始数据。|
| PG | PG 全称 Placement Grouops，是一个逻辑的概念，一个 PG 包含多个 OSD。引入 PG 这一层其实是为了更好的分配数据和定位数据。 |
| RADOS | RADOS 全称 Reliable Autonomic Distributed Object Store，是 Ceph 集群的精华，用户实现数据分配、Failover 等集群操作。  |
| Libradio | Librados 是 Rados 提供库，因为 RADOS 是协议很难直接访问，因此上层的 RBD、RGW 和 CephFS 都是通过 librados 访问的，目前提供 PHP、Ruby、Java、Python、C和C++支持。|
| CRUSH | CRUSH 是 Ceph 使用的数据分布算法，类似一致性哈希，让数据分配到预期的地方。 |
| RBD | RBD 全称 RADOS block device，是 Ceph 对外提供的块设备服务。 |
| RGW | RGW 全称 RADOS gateway，是 Ceph 对外提供的对象存储服务，接口与 S3 和 Swift 兼容。 |
| CephFS | CephFS 全称 Ceph File System，是 Ceph 对外提供的文件系统服务。|

## 2 Ceph IO 流程及数据分布



## 3 Ceph 心跳机制


## 4 Ceph 通信框架


## 5 Ceph CRUSH 算法


## 6 定制化 Ceph RBD QOS

## 参考资料
* Ceph官网
https://ceph.io/
* 李航：分布式存储 Ceph 介绍及原理架构分享
https://juejin.im/post/6844903859945488397


