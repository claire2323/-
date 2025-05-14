### css伪类与伪元素区别

在CSS3之前，伪类和伪元素都叫伪类，之后伪类用:表示，伪元素用::表示

区分：都是用来表示**DOM树以外的元素**，核心在于是否创建了"**新的元素**"

伪类：表示元素的状态，当元素达到一个特定的状态时可以得到一个伪类的样式，但是当状态改变时，又会失去这个样式，例如：:hover :disabled :active :visited

伪元素：看上去像是在元素上添加了新的展示元素，但是是**假元素**，无法选中元素 ::after ::before
<br/>

### 说一下盒子模型，以及他们的区别

盒子模型分为标准盒模型和IE盒模型，默认是使用标准盒模型。可以用box-size:border-box来切换为IE盒模型。

标准盒模型是指盒子的宽高需要加上padding和border，由padding,border,margin,content四部分组成

怪异盒模型是指盒子的宽高只由margin,content组成
<br/>

### 如何利用CSS画一个扇形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Css画出一个扇形</title>
    <style>
        #sector {
            width: 0;
            height: 0;
            border: 100px solid;
            border-radius: 100px;
            border-color: orangered transparent transparent transparent;
        }
    </style>
</head>
<body>
    <div id="sector"></div>
</body>
</html>
```

### iPhone 里面 Safari 上如果一个输入框 fixed 绝对定位在底部，当软键盘弹出的时候会有什么问题，如何解决

问题：固定定位的输入框可能会被键盘遮挡。
解决方法：
1. 使用JS监听键盘：通过监听resize事件，调整元素的位置来适应键盘的弹出
   ```js
   window.addEventListener('resize', function() {
       const inputBox = document.getElementById('inputBox');
       if (window.innerHeight < screen.height) {
           // 键盘弹出
           inputBox.style.bottom = '20px'; // 调整输入框距离底部的距离
       } else {
           // 键盘收起
           inputBox.style.bottom = '0'; // 恢复默认位置
       }
   });
   ```
2. 调整视口高度：当键盘弹出的时候，调整视口高度或使用viewport-fit=cover来确保元素不被遮挡
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
   ```
3. 利用env(safe-area-inset-bottom)确保输入框距离离屏幕底部的安全距离
   ```css
   #inputBox {
       position: fixed;
       bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
       bottom: env(safe-area-inset-bottom); /* iOS 11.2+ */
   }
   ```

4. 使用position:sticky替代fixed
<br/>

### BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

block formatting cotext --- 块级格式化上下文，独立的渲染区域、不会影响边界以外的元素

目的：解决浮动造成父元素塌陷的问题，以及外边距重叠问题

触发条件：position:fixed/absolute，overflow不为visible，float不为none，display为inline-block/flex

常使用的清除浮动的BFC方式只有**overflow:hidden**，原因是使用float或者position方式清除浮动，虽然父级盒子内部浮动被清除了，但是父级本身又脱离文档流了，会对父级后面的兄弟盒子布局造成影响
<br/>

### 说一下什么是重绘重排，哪些操作会造成重绘重排

重绘：浏览器对元素的外观进行了重新绘制，但是不改变其布局

- 改变元素背景颜色、字体颜色、边框颜色等。
- 改变透明度
- 改变可见性 visibility:hidden
- 改变元素的box-shadow/text-shadow

重排/回流：对浏览器布局进行重新计算，会导致页面和部分页面的重新渲染

- 改变元素尺寸
- 改变元素边距/内边距
- 改变字体大小
- 修改position/display/float属性
- 调整窗口大小或滚动页面

重排一定会造成重绘，但是重绘不一定会造成重排
<br/>
### 通过link进来的CSS会阻塞页面渲染嘛，JS会阻塞吗，如果会如何解决？

DOM解析和CSS解析是两个并行的进程，CSS加载就不会阻塞DOM的解析

但是Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待CSSOM Tree构建完成（CSS资源加载）后才能开始渲染。因此CSS加载是会阻塞DOM的渲染的。

由于JS可能会操作之前的DOM节点和CSS样式，因此浏览器会维持html中的CSS和JS顺序。因此，样式表会在后面的JS执行前先加载执行完毕。所以CSS会阻塞后面JS的执行。

### 使用 Css 实现一个水波纹效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>水波纹效果</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
      margin: 0;
    }

    .ripple {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      background: radial-gradient(circle, rgba(0, 123, 255, 0.6) 0%, rgba(0, 123, 255, 0) 100%);
      position: relative;
      overflow: hidden;
    }

    .ripple::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: radial-gradient(circle, rgba(0, 123, 255, 0.6) 0%, rgba(0, 123, 255, 0) 100%);
      animation: rippleEffect 2s infinite;
    }
    @keyframes rippleEffect {
      0% {
        width: 0;
        height: 0;
        opacity: 0.6;
      }

      100% {
        width: 200px;
        height: 200px;
        border-radius:100px;
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="ripple"></div>
</body>
</html>
```

### Css 选择器都有什么，权重是怎么计算的

!important>内联选择器（1000）>ID选择器（100）>类/伪类/元素选择器（10）>标签选择器（1）>通配符（0）

### 布局都有什么方式，float 和 position 有什么区别

- 块级布局：默认独占一行
- 行内布局：不会独占一行，多个行内元素可以在同一行显示。不能设置宽高
- 行内块布局：不会独占一行，但是可以设置宽高
- 弹性布局：可以实现水平或垂直对齐，间距调整等
- 网格布局：二维布局方式，可以同时控制行和列

float：浮动，允许其他内容围绕。会脱离文档流，父元素可能会出现高度塌陷的问题，需要清除浮动

position：设置元素的定位方式。

- 提供了更灵活的定位方式，适用于复杂的布局需求。
- 不同的`position`值有不同的用途，选择合适的值可以实现精确的布局控制。

### 说一下 CSS 预处理器，Less 带来的好处？

CSS缺点：

- 语法不够强大，不能够嵌套书写，导致模板化开发中需要书写很多重复的选择器。
- 没有变量和合理的样式复制机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护。

这就导致了我们在工作中无端增加了许多工作量。而使用CSS预处理器，提供 CSS 缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护性。大大提高了我们的开发效率。

### `nth-child`和`nth-of-type` 有什么区别

都是CSS的伪类选择器，用于选择特定顺序的元素。

nth-child：选择第n个子元素

nth-of-type：选择某一类型的元素的第几个 (eg: li:nth-of-type(1))

### `<img>`是什么元素

img是一个**自闭合元素**，用于在网页中嵌入图像。它属于替换元素和行内元素。常见的属性有src,alt,width,height,loading等。

### flex 布局，如何实现把八个元素分两行摆放

```html
<style>
  .container {
    display: flex;
    flex-flow: row wrap; /* 主轴方向为水平方向，并允许换行 */
    align-content: flex-start;   /* 多行时靠顶部排列*/
  }

  .item {
    box-sizing: border-box;
    flex: 0 0 25%; /* 不可缩放，不可放大，固定占 25% 宽度 */
    height: 40px;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```
### CSS 方式实现一个不知道宽高的 div 居中都有哪几种方法

- 父盒子设置为flex布局，并设置justify-content: cetner;align-items:center
- 父盒子设置为grid布局，并设置justify-content: cetner;align-items:center  or  place-items:center
- 子绝父相，子设置left:50%;top:50%;transform:translate(-50%,-50%)
