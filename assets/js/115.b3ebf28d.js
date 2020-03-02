(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{312:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微任务、宏任务与-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务、宏任务与-event-loop"}},[t._v("#")]),t._v(" 微任务、宏任务与 Event-Loop")]),t._v(" "),a("p",[t._v("首先，JavaScript 是一个单线程的脚本语言, Event Loop 是 javascript 的执行机制。")]),t._v(" "),a("p",[t._v("在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。\n在当前的微任务没有执行完成时，是不会执行下一个宏任务的。\n所有会进入的异步都是指的事件回调中的那部分代码.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 宏任务")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("也就是说 "),a("code",[t._v("new Promise")]),t._v(" 在实例化的过程中所执行的代码都是同步进行的，而 then 中注册的回调才是异步执行的。\n在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。\n所以就得到了上述的输出结论 1、2、3、4。")]),t._v(" "),a("p",[t._v("这个检查的过程是持续进行的，每完成一个任务都会进行一次，而这样的操作就被称为 Event Loop。")]),t._v(" "),a("h2",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),a("h3",{attrs:{id:"宏任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务"}},[t._v("#")]),t._v(" 宏任务")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("浏览器")]),t._v(" "),a("th",[t._v("Node")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("I/O")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("setTimeout")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("setInterval")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("setImmediate")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("requestAnimationFrame")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])])])]),t._v(" "),a("p",[t._v("有些地方会列出来 UI Rendering，说这个也是宏任务，可是在读了 HTML 规范文档以后，发现这很显然是和微任务平行的一个操作步骤\nrequestAnimationFrame 姑且也算是宏任务吧，requestAnimationFrame 在 MDN 的定义为，下次页面重绘前所执行的操作，而重绘也是作为宏任务的一个步骤来存在的，且该步骤晚于微任务的执行")]),t._v(" "),a("p",[a("code",[t._v("setTimeout")]),t._v("就是作为宏任务来存在的，而"),a("code",[t._v("Promise.then")]),t._v("则是具有代表性的微任务")]),t._v(" "),a("p",[t._v("在官方文档中的定义，setImmediate 为一次 Event Loop 执行完毕后调用。\nsetTimeout 则是通过计算一个延迟时间后进行执行。")]),t._v(" "),a("h3",{attrs:{id:"微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("浏览器")]),t._v(" "),a("th",[t._v("Node")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("process.nextTick")]),t._v(" "),a("td",[t._v("❌")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("MutationObserver")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("Promise.then catch finally")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])])])]),t._v(" "),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("ul",[a("li",[t._v("微任务进入主线程执行是一队一队的, 而宏任务进入主线程是一个一个的。")]),t._v(" "),a("li",[t._v("微任务是在主线程空闲时批量执行, 宏任务是在事件循环下一轮的最开始执行")])]),t._v(" "),a("h2",{attrs:{id:"async-await-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await-函数"}},[t._v("#")]),t._v(" async/await 函数")]),t._v(" "),a("p",[t._v("因为，async/await 本质上还是基于 Promise 的一些封装，而 Promise 是属于微任务的一种。所以在使用 await 关键字与 Promise.then 效果类似：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("code",[t._v("async 函数在 await 之前的代码都是同步执行的，可以理解为 await 之前的代码属于 new Promise 时传入的代码，await 之后的所有代码都是在 Promise.then 中的回调")])]),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b73d7a6518825610072b42b",target:"_blank",rel:"noopener noreferrer"}},[t._v("微任务、宏任务与 Event-Loop"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b498d245188251b193d4059",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 事件循环机制（event loop）之宏任务/微任务"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e0a8d57f265da33a55fb33c",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件循环 形象深动(JavaScript)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Visualized: Event Loop"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);