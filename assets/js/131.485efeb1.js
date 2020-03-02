(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{328:function(t,a,r){"use strict";r.r(a);var _=r(0),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http、tcp-ip-协议的原理及应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http、tcp-ip-协议的原理及应用"}},[t._v("#")]),t._v(" HTTP、TCP/IP 协议的原理及应用")]),t._v(" "),r("h2",{attrs:{id:"访问网页时发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#访问网页时发生了什么"}},[t._v("#")]),t._v(" 访问网页时发生了什么")]),t._v(" "),r("h3",{attrs:{id:"第一步，找服务器-ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一步，找服务器-ip"}},[t._v("#")]),t._v(" 第一步，找服务器 IP")]),t._v(" "),r("p",[t._v("当用户输入一个网址并按下回车键的时候，浏览器得到了一个域名。而在实际通信过程中，浏览器需要的是一个 IP 地址。为了获得 IP 地址，浏览器会做如下操作，一般我们把浏览器通过域名查找对应 IP 的行为叫做 DNS 解析。")]),t._v(" "),r("ul",[r("li",[t._v("先找浏览器的本地的缓存")]),t._v(" "),r("li",[t._v("再找电脑硬盘里的 host 文件，有没有记录这个域名和 IP 的映射关系")]),t._v(" "),r("li",[t._v("实在没找到，只好通过网络链路去域名供应商那里查询")])]),t._v(" "),r("h3",{attrs:{id:"第二步，建立-tcp-ip-连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二步，建立-tcp-ip-连接"}},[t._v("#")]),t._v(" 第二步，建立 TCP/IP 连接")]),t._v(" "),r("ul",[r("li",[t._v("浏览器获取到了服务器对应 IP，就会向对应 IP 的服务器发送 TCP 连接请求。")]),t._v(" "),r("li",[t._v("服务器收到请求后回应，双方多次确认后建立起 TCP 双向连接。")])]),t._v(" "),r("blockquote",[r("p",[t._v("从客户端发起连接请求一直到 TCP 连接建立，这个过程，叫做 三次握手。\n如果请求是 HTTPS 的，还需要在 TCP 连接上，再通过 SSL 或 TLS 提供加密处理数据、验证对方身份以及数据完整性，来保证数据传输的安全。")])]),t._v(" "),r("h3",{attrs:{id:"第三步，请求资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三步，请求资源"}},[t._v("#")]),t._v(" 第三步，请求资源")]),t._v(" "),r("ul",[r("li",[t._v("TCP 连接创建完成，浏览器开始向服务端发送正式的 HTTP 请求的数据包。")]),t._v(" "),r("li",[t._v("服务端接受请求，对请求进行解析，经过数据操作后，返回客户端需要的数据包。")])]),t._v(" "),r("h3",{attrs:{id:"第四步，浏览器渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第四步，浏览器渲染"}},[t._v("#")]),t._v(" 第四步，浏览器渲染")]),t._v(" "),r("ul",[r("li",[t._v("浏览器获取到需要的数据以后，对数据进行拼接、解析、执行，最终将完整的网页绘制在页面上。")])]),t._v(" "),r("h3",{attrs:{id:"第五步，浏览器缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第五步，浏览器缓存"}},[t._v("#")]),t._v(" 第五步，浏览器缓存")]),t._v(" "),r("p",[t._v("浏览器拿到服务端返回的数据后，会根据一定的策略进行数据的缓存，这样在下一次请求同样数据的时候，就可直接到缓存拿取，不再请求服务器。")]),t._v(" "),r("h2",{attrs:{id:"经典网络五层模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#经典网络五层模型"}},[t._v("#")]),t._v(" 经典网络五层模型")]),t._v(" "),r("h3",{attrs:{id:"应用层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),r("p",[t._v("应用层包含了我们所说的 HTTP 协议，为各个应用软件提供了很多服务，常见的应用层服务有：HTTP 服务 、FTP 服务 、Email 服务等。应用层屏蔽了底层模型的相关细节，作为应用支持，只提供给使用者一些必要的使用方式。")]),t._v(" "),r("h3",{attrs:{id:"传输层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),r("p",[t._v("常见的传输层协议有 TCP 和 UDP ，传输层作为为应用层的基础，定义了“端到端（end to end）”之间数据间的传输方式，比如：两台设备如何建立连接？设备之间需要以何种规范进行数据传输？需要以什么方式进行数据的分片、重组、拼接？这些都是传输层为我们定义好的。")]),t._v(" "),r("h3",{attrs:{id:"网络层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),r("p",[t._v("通常我们常说的 IP 协议就位于这一层。网络层为数据在结点之间传输创建逻辑链路，当我们在浏览器敲下域名，浏览器在网络里如何通过这个域名，找到对应的 IP 映射，这个查询的逻辑关系和链路，是网络层规范和定义的。")]),t._v(" "),r("h3",{attrs:{id:"数据链路层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),r("p",[t._v("数据链路层在通信实体间建立数据链路连接，物理设备连接完成以后，需要相应的软件和驱动来连接和打通这些物理设备，创建电路的连接。")]),t._v(" "),r("h3",{attrs:{id:"物理层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),r("p",[t._v("定义物理设备如何传输数据，常见的物理层有网线，光缆，网卡，声卡等，物理层是一切软件的基础。")]),t._v(" "),r("h2",{attrs:{id:"uri、url-和-urn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri、url-和-urn"}},[t._v("#")]),t._v(" URI、URL 和 URN")]),t._v(" "),r("h3",{attrs:{id:"uri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" URI")]),t._v(" "),r("ul",[r("li",[t._v("Uniform Resource Identifier，统一资源标识符，简称为 URI。")]),t._v(" "),r("li",[t._v("每个 Web 服务器都有一个 URI 标识符，它在世界范围内唯一标识并定位信息资源，一个资源信息有了 URI 标识以后，在互联网上就能通过一个固定的地址访问到这个资源。")]),t._v(" "),r("li",[t._v("它具有两种形式，URN （统一资源名）、URL（统一资源定位符），也就是说 URL 和 URN 是它的子集。")])]),t._v(" "),r("h3",{attrs:{id:"url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),r("blockquote",[r("p",[t._v("uniform resource location")])]),t._v(" "),r("p",[t._v("统一资源定位符，简称 URL")]),t._v(" "),r("h3",{attrs:{id:"urn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#urn"}},[t._v("#")]),t._v(" URN")]),t._v(" "),r("p",[t._v("Uniform Resource Name，统一资源名称，简称 URN，它的用处简单说就是永久定位资源，因为同一个资源可能会更换存储位置，存储位置一旦更换，再访问原来的 url 肯定是拿不到的，URN 就是解决这个问题的，不管资源位置怎么移动，只要访问同一个 URN 都能定位到。")]),t._v(" "),r("h2",{attrs:{id:"tcp-ip-协议族"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议族"}},[t._v("#")]),t._v(" TCP/IP 协议族")]),t._v(" "),r("h3",{attrs:{id:"ip-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-协议"}},[t._v("#")]),t._v(" IP 协议")]),t._v(" "),r("ul",[r("li",[t._v("IP 协议使互联网成为一个允许连接不同类型的计算机和不同操作系统的网络。")]),t._v(" "),r("li",[t._v("IP 地址是 IP 协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，相当于这台机器的暂用名，别的机器可以通过这个名字找到它，进而能互相建立起连接进行通信和交流。")])]),t._v(" "),r("h3",{attrs:{id:"tcp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),r("ul",[r("li",[t._v("TCP 相比于 UDP 的优势在于它的传输稳定性，在数据传输之前必须经过三次握手建立连接；在数据传输过程中必须保证数据有序完整地传到对端。")]),t._v(" "),r("li",[t._v("TCP 相比于 UDP 的劣势在于它的复杂度，连接建立、断开都是比较大的性能开销，而且数据传输过程中一旦卡住，则必须等前面的数据发送完毕以后，后续数据才能继续传输。")]),t._v(" "),r("li",[t._v("每台服务器可提供支持的 TCP 连接数量是有限的，所以这也使得 TCP 连接变成了稀缺资源，经不起浪费。")])]),t._v(" "),r("h3",{attrs:{id:"udp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),r("ul",[r("li",[t._v("UDP 协议是面向无连接的，不需要在传输数据前先建立连接，想发就发想传就传。")]),t._v(" "),r("li",[t._v("UDP 做的工作只是报文搬运，不负责有序且不丢失地传递到对端，因此容易出现丢包的情况。")]),t._v(" "),r("li",[t._v("UDP 不仅支持一对一的传输方式，还支持一对多、多对多、多对一的方式，也就是说 UPD 提供了单播、多播、广播的功能。")]),t._v(" "),r("li",[t._v("UDP 相比于 TCP 的优势在于它的轻量、高效和灵活，在一些对于实时性应用要求较高的场景下需要使用到 UDP，比如直播、视频会议、LOL 等实时对战游戏。")]),t._v(" "),r("li",[t._v("UDP 相比于 TCP 的劣势在于它的不可靠性和不稳定性。")])]),t._v(" "),r("h3",{attrs:{id:"tcp-连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接"}},[t._v("#")]),t._v(" TCP 连接")]),t._v(" "),r("p",[t._v("在客户端发送正式的 HTTP 请求之前，需要先创建一个 TCP 连接，在创建的 TCP Connect 通道下，所有的 HTTP 请求和响应才能正常的发送和接受。")]),t._v(" "),r("h2",{attrs:{id:"tcp-的三次握手和四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手和四次挥手"}},[t._v("#")]),t._v(" TCP 的三次握手和四次挥手")]),t._v(" "),r("h3",{attrs:{id:"三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),r("ul",[r("li",[t._v("第一次握手：由客户端向服务端发送连接请求 SYN 报文，该报文段中包含自身的数据通讯初始序号，请求发送后，客户端便进入 SYN-SENT 状态。")]),t._v(" "),r("li",[t._v("第二次握手：服务端收到连接请求报文段后，如果同意连接，则会发送一个包含了 ACK 和 SYN 报文信息的应答，该应答中也会包含自身的数据通讯初始序号（在断开连接的“四次挥手”时，ACK 和 SYN 这两个报文是作为两次应答，独立开来发送的，因此会有四次挥手），服务端发送完成后便进入 SYN-RECEIVED 状态。")]),t._v(" "),r("li",[t._v("第三次握手：当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")])]),t._v(" "),r("h3",{attrs:{id:"四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),r("ul",[r("li",[t._v("第一次挥手：客户端认为自己这边的数据已经全部发送完毕了，于是发送一个 FIN 用来关闭客户端到服务端的数据传输，发送完成以后，客户端进入 FIN_WAIT_1 状态。")]),t._v(" "),r("li",[t._v("第二次挥手：服务端收到客户端发送回来的 FIN 以后，会告诉应用层要释放 TCP 链接，并且发送一个 ACK 给客户端，表明已经收到客户端的释放请求了，不会再接受客户端发来的数据，自此，服务端进入 CLOSE_WAIT 的状态。")]),t._v(" "),r("li",[t._v("第三次挥手：服务端如果此时还有未发送完的数据可以继续发送，发送完毕后，服务端也会发送一个释放连接的 FIN 请求用来关闭服务端到客户端的数据传送，然后服务端进入 LAST_ACK 状态。")]),t._v(" "),r("li",[t._v("第四次挥手：客户端接收到服务端的 FIN 请求后，发送最后一个 ACK 给服务端，接着进入 TIME_WAIT_2 状态，该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，客户端就进入 CLOSED 状态.服务端在收到应答消息后，也会进入 CLOSED 状态，至此完成四次挥手的过程，双方正式断开连接。")])]),t._v(" "),r("h2",{attrs:{id:"http-定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-定义"}},[t._v("#")]),t._v(" HTTP 定义")]),t._v(" "),r("p",[t._v("一旦端对端成功建立起了 TCP 连接，下一步就要开始发送正式的 HTTP 请求了。流淌在 TCP Connect 通道里的 HTTP 只负责传输数据包，并没有连接的概念，因此 HTTP 也被叫做“无状态协议”。")]),t._v(" "),r("ul",[r("li",[t._v("HTTP 协议是无状态的。")]),t._v(" "),r("li",[t._v("HTTP 请求互相独立。")]),t._v(" "),r("li",[t._v("HTTP 协议基于 TCP 协议。")])]),t._v(" "),r("h3",{attrs:{id:"_1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1"}},[t._v("#")]),t._v(" 1.1")]),t._v(" "),r("ul",[r("li",[t._v("默认支持持久连接")]),t._v(" "),r("li",[t._v("默认支持长连接（PersistentConnection），即默认开启 Connection： keep-alive。")]),t._v(" "),r("li",[t._v("支持请求的流水线（Pipelining）处理，即在一个 TCP 连接上可以传送多个 HTTP 请求和响应。")]),t._v(" "),r("li",[t._v("增加了 host 请求头字段，通过对 host 解析，就能够允许在同一台物理服务器上运行多个软件服务，极大提高了服务器的使用率。目前的 nginx 反向代理就是根据 HTTP 请求头中的 host 来分辨不同的请求，从而将这些请求代理到同一台服务器不同的软件服务上。")])]),t._v(" "),r("h3",{attrs:{id:"_2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-0"}},[t._v("#")]),t._v(" 2.0")]),t._v(" "),r("ul",[r("li",[t._v("HTTP1.x 的解析是基于文本，存在解析上的缺陷；而 HTTP2.0 直接使用二进制的解析方式来替代 HTTP 1.X 的字符串解析，更为高效和健壮。")]),t._v(" "),r("li",[t._v("HTTP2.0 所有数据以“帧”的方式进行传输，因此同一个连接中发送的多个请求不再需要按照顺序进行返回处理，可以达到并行的数据传输。")]),t._v(" "),r("li",[t._v("HTTP2.0 压缩头信息进行传输数据量的优化。HTTP1.x 的请求头带有大量信息，而且每次都要重复发送，HTTP2.0 使用 encoder 来减少需要传输的请求头大小，通讯双方各自缓存一份")]),t._v(" "),r("li",[t._v("HTTP2.0 新增了 server push（服务端推送） 的概念，服务端可以主动发起一些数据推送。比如，服务端在接收到浏览器发来的 HTML 请求的同时，可以主动推送相关的资源文件（js/css）给客户端，并行发送，提高网页的传输和渲染效率。")]),t._v(" "),r("li",[t._v("目前如果要使用 HTTP2 需要首先使用 HTTPS 在这基础上，才能使用 HTTP2")])]),t._v(" "),r("h2",{attrs:{id:"http-的报文组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-的报文组成"}},[t._v("#")]),t._v(" HTTP 的报文组成")]),t._v(" "),r("p",[t._v("一个完整的 HTTP 报文通常由 首行、首部 和 主体 构成。")]),t._v(" "),r("h2",{attrs:{id:"http-缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),r("ul",[r("li",[t._v("Service Worker")]),t._v(" "),r("li",[t._v("Memory Cache")]),t._v(" "),r("li",[t._v("Disk Cache")]),t._v(" "),r("li",[t._v("网络请求")])]),t._v(" "),r("h3",{attrs:{id:"service-workder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-workder"}},[t._v("#")]),t._v(" service workder")]),t._v(" "),r("p",[t._v("Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),t._v(" "),r("h3",{attrs:{id:"memory-cache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[t._v("#")]),t._v(" Memory Cache")]),t._v(" "),r("p",[t._v("memory cache 是内存中的缓存存储。\n如果明确指定了 Cache-Control 为 no-store，浏览器则不会使用 memory-cache。")]),t._v(" "),r("h3",{attrs:{id:"disk-cache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[t._v("#")]),t._v(" Disk Cache")]),t._v(" "),r("p",[t._v("Disk Cache 严格依照 HTTP 头信息中的字段来判断资源是否可缓存、是否要认证等。")]),t._v(" "),r("h3",{attrs:{id:"网络请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[t._v("#")]),t._v(" 网络请求")]),t._v(" "),r("p",[t._v("如果一个请求的资源文件均未命中上述缓存策略，那么就会发起网络请求。浏览器拿到资源后，会把这个新资源加入缓存。")]),t._v(" "),r("h2",{attrs:{id:"cache-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),r("h2",{attrs:{id:"缓存校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存校验"}},[t._v("#")]),t._v(" 缓存校验")]),t._v(" "),r("h3",{attrs:{id:"last-modified"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[t._v("#")]),t._v(" Last-Modified")]),t._v(" "),r("p",[t._v("顾名思义，就是资源的最新一次修改时间。")]),t._v(" "),r("h3",{attrs:{id:"etag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" Etag")]),t._v(" "),r("p",[t._v("Etag 的作用本质上和 Last-Modified 差别不大。相比于 Last-Modified 使用最后修改日期来比较资源是否失效的缓存校验策略，ETag 则是通过数据签名来做一个更加严格的缓存验证。")]),t._v(" "),r("h2",{attrs:{id:"浏览器的同源策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的同源策略"}},[t._v("#")]),t._v(" 浏览器的同源策略")]),t._v(" "),r("blockquote",[r("p",[t._v("浏览器的同源限制：当浏览器访问 URL 地址的协议（schema）/ 端口（port）/ 域名（host），三者中有任何一个与当前的 URL 片段信息不匹配的时候，便存在跨域问题。")])]),t._v(" "),r("h3",{attrs:{id:"access-control-allow-origin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-origin"}},[t._v("#")]),t._v(" Access-Control-Allow-Origin")]),t._v(" "),r("p",[t._v("Access-Control-Allow-Origin 标识了服务器允许的跨域白名单")]),t._v(" "),r("h3",{attrs:{id:"cors-的预请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cors-的预请求"}},[t._v("#")]),t._v(" CORS 的预请求")]),t._v(" "),r("p",[t._v("浏览器预请求的触发条件，是判断本次请求是否属于一个简单请求。\n如果本次请求属于一个复杂请求，那么在发送正式的跨域请求之前，浏览器会先准备一个名为 OPTIONS 的 HTTP Method ，作为预请求发送。\n在服务器通过预请求后，下面浏览器才会发生正式的数据请求。整个请求过程其实是发生了两次请求：一个预检请求，以及后续的实际数据请求。")]),t._v(" "),r("h2",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),r("ul",[r("li",[t._v("在 HTTP1.0 中，每一次 HTTP 请求都会创建一个 TCP 连接，在请求发送完成，服务器响应以后，这个 TCP 连接就自动断开了。")]),t._v(" "),r("li",[t._v("在 HTTP1.1 中，可以通过手动设置 Connection： keep-alive 请求头来建立 TCP 的持久连接，多个 HTTP 请求可以共用一个 TCP 连接。但是 TCP 连接存在线头阻塞，即若干个请求排队等待发送，一旦有某请求超时等，后续请求只能被阻塞。")]),t._v(" "),r("li",[t._v("在 HTTP2 中，采用了信道复用，使 TCP 连接支持并发请求，即多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行吗，这样一来，大部分请求可以使用一个 TCP 连接，而不用创建新的 TCP 连接通道，既节省了三次握手的开销，又节约了服务端维护 TCP 端口的成本。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d75c116f265da03d9255dd1#heading-28",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP、TCP/IP 协议的原理及应用"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);