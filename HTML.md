### meta元素有哪些
```
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
### 网站 SEO 怎么处理

```
1.添加语义化标签的使用
2.meta元元素要写好
3.加logo
4.代码简洁，减少嵌套的使用
5.加快首屏渲染速度，ssr，cdn，减少不必要请求，图片，视频能合并就合并
6.重要部分放在html前面
```
### Html5 有哪些新特性？如何处理 Html5 新标签的浏览器兼容问题？如何区分 Html 和 Html5?

```
新特性:
1.新增语义化标签<header><nav><article><section><aside><footer>等
2.新增<video><audio>标签，允许嵌入视频和音频
3.引入web storage本地存储，允许在客户端存储数据
4.引入canvas进行动态图形和动画绘制
5.引入application cache，允许开发者为网页应用创建离线缓存
兼容性：
1.使用JS动态创建HTML5标签，并添加到DOM中
2.使用标签替代方案
3.使用HTML5 Shiv
```
### 请说明 Html 布局元素的分类有哪些？并描述每种布局元素的应用场景

```
1.块级布局元素 会独占一行
<div> 用于创建一个独立的布局区域
<header> 用于页面或文章的头部位置
<footer> 用于页面或文章的底部区域
<section> 定义文档中的一个独立区域
<article> 定义独立的内容块
<aside> 定义与页面内容相关但不直接包含在主内容流中的信息
2.行内布局元素 不会独占一行
<span> 
<a>
<img>
<strong><em>
3.表格布局元素 创建表格
<table>
<thead><tbody><tfoot>
4.表单布局元素 创建表单
<form>
<input>
<label>
<select><option>
```



