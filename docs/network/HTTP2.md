# HTTP2

> HTTP2 即超文本传输协议 2.0。是由互联网工程任务组（IETF）的 Hypertext Transfer Protocol Bis (httpbis)工作小组进行开发。主要是为了优化性能，前身是 Google 的 SPDY 。是兼容 HTTP1.1 的 HTTP1.1 发布于 1999 年。HTTP2 发布于 2015 年 5 月

理解 http 协议之前一定要对 TCP 有一定基础的了解。HTTP 是建立在 TCP 协议之上，TCP 协议作为传输层协议其实离应用层并不远。HTTP 协议的瓶颈及其优化技巧都是基于 TCP 协议本身的特性。比如 TCP 建立连接时三次握手有 1.5 个 RTT（round-trip time）的延迟，为了避免每次请求的都经历握手带来的延迟，应用层会选择不同策略的 http 长链接方案。又比如 TCP 在建立连接的初期有慢启动（slow start）的特性，所以连接的重用总是比新建连接性能要好。

## 改进

### 首部压缩（Header Compression）

`HTTP/1.1` 并不支持 `HTTP` 首部压缩，为此 `SPDY` 和 `HTTP/2` 应运而生，SPDY 使用的是通用的 `DEFLATE` 算法，而 `HTTP/2` 则使用了专门为首部压缩而设计的 `HPACK` 算法。

前面提到过 `http1.x` 的 `header` 由于 `cookie` 和 `user agent` 很容易膨胀，而且每次都要重复发送。http2.0 使用 `encoder` 来减少需要传输的 `header` 大小，通讯双方各自 cache 一份 `header fields` 表，既避免了重复 `header` 的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩 `header`，减少发送包的数量从而降低延迟。

HPACK 压缩的原理如下 ：

客户端和服务端共同维护一个『静态字典』，字典中每行 3 列，类似下表

| index | header name | header value |
| ----- | ----------- | ------------ |
| 2     | :method     | GET          |
| 3     | :method     | POST         |

当请求的 header 头部中包含 :mehtod:GET，客户端在发送请求的时候，会直接发送静态字段中对应的 index 值，在这里也就是 2。服务端在接受到请求的时候，去寻找静态字典中 index = 2 对应的 header name 和 header value，就明白了客户端发起了一个 GET 请求。

### 服务端推送（Server Push）

服务端推送是一种在客户端请求之前发送数据的机制。在 `HTTP/2` 中，服务器可以对客户端的一个请求发送多个响应。Server Push 让 `HTTP1.x` 时代使用内嵌资源的优化手段变得没有意义;如果一个请求是由你的主页发起的，服务器很可能会响应主页内容、logo 以及样式表，因为它知道客户端会用到这些东西。这相当于在一一个 HTML 文档内集合了所有的资源，不过与之相比，服务器推送还有-个很大的优势:可以缓存!也让在遵循同源的情况下，不同页面之间可以共享缓存资源成为可能。

### 多路复用

`HTTP2` 与 `HTTP1.1` 最重要的区别就是解决了线头阻塞的问题！其中最重要的改动是：多路复用 (Multiplexing)

多路复用允许同时通过单一的 `HTTP/2` 连接发起多重的请求-响应消息。

众所周知，在 `HTTP/1.1` 协议中「浏览器客户端在同-时间，针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞」 。

因此 `HTTP/2` 可以很容易的去实现多流并行而不用依赖建立多个 TCP 连接，`HTTP/2` 把 HTTP 协议通信的基本单位缩小为一个一个的帧，这些帧对应着逻辑流中的消息。并行地在同一个 TCP 连接上双向交换消息。

### 二进制分帧

应用层(`HTTP/2`)和传输层(TCP or UDP)之间增加一个二进制分帧层。

在二进制分帧层中，`HTTP/2` 会将所有传输的信息分割为更小的消息和帧(`frame`) ，并对它们采用二进制格式的编码，其中 `HTTP1.x` 的首部信息会被封装到 HEADER frame,而相应的 Request Body 则封装到 DATA frame 里面。
`HTTP/2` 通信都在一个连接 上完成，这个连接可以承载任意数量的双向数据流。
在过去，HTTP 性能优化的关键并不在于高带宽，而是低延迟。`TCP` 连接会随着时间进行自我「调谐」，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移提高传输的速度。这种调谐则被称为 `TCP` 慢启动。由于这种原因，让原本就具有突发性和短时性的 HTTP 连接变的十分低效。
`HTTP/2` 通过让所有数据流共用同-个连接，可以更有效地使用 `TCP` 连接，让高带宽也能真正的服务于 HTTP 的性能提升。

`http/1.x` 是一个文本协议，而 `http2` 是一个彻彻底底的二进制协议，这也是 `http2` 可以折腾出那么多新花样的原因。http2 的二进制协议被称之为二进制分帧。

## 总结

- 二进制分帧
- 多路复用
- 头部压缩
- 服务器推送

## links

- [前端培训-中级阶段（27）- http 2.0（2019-11-28 期）](https://segmentfault.com/a/1190000020989869)
- [HTTP2 详解](https://juejin.im/post/5b88a4f56fb9a01a0b31a67e)
- [HTTP2 和 HTTPS 来不来了解一下？](https://juejin.im/post/5b5ef5a25188251af86bfebf)
- [http2 简介](https://juejin.im/post/5aaccf8f51882555784dbabc)
- [HTTP/2 相比 1.0 有哪些重大改进？](https://www.zhihu.com/question/34074946)
