## html
```
### meta元素有哪些
meta是在head元素中，用来描述网页文档属性，由name和content属性定义
charset 描述html文档的编码类型
keyword 页面关键词
desciption 页面描述
refresh 重定向和刷新
viewport 控制视口大小和比例，其中content中可设置宽度、高度、原始比例、最大缩放比例、最小缩放比例、用户是否可缩放
```
### async 和 defer区别

```
HTML执行的时候如果遇到外部JS引用，需要下载JS文件，此时会停止页面渲染，导致页面出现空白。defer和async就是用来控制JS文件的下载和执行
defer 表明脚本执行时不会影响页面构造，让脚本在页面解析完成后执行，就是让浏览器下载JS文件，但是等到页面解析完成后执行
async 只适用于外部JS文件，告诉浏览器立即下载JS文件，但是不保证按照JS的先后顺序运行
```

### 语义化

```
语义化标签由header section h1~h6 footer等标签组成，便于页面结构布局，在CSS未加载完成前也能够有明确的结构
对于用户来说，当页面出现卡顿时，一个好的页面结构能缓解用户心情
对于SEO排名，能够提高搜索引擎排名
对个人来说，能够提高开发清晰度
对于团队，能够提高后期的维护
```

### 标签默认事件禁掉之后做了什么才实现了跳转
```
对HTML元素如<a>标签的默认行为进行处理
通过JS的event.preventDefault()来禁止默认事件
手动实现跳转：window.location.href = ''
window.location.replace('')
window.location.assign('')
```
