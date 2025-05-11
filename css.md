### css伪类与伪元素区别

```
在CSS3之前，伪类和伪元素都叫伪类，之后伪类用:表示，伪元素用::表示
区分：都是用来表示DOM树以外的元素，核心在于是否创建了"新的元素"
伪类：表示元素的状态，当元素达到一个特定的状态时可以得到一个伪类的样式，但是当状态改变时，又会失去这个样式，例如：:hover :disabled :active :visited
伪元素：看上去像是在元素上添加了新的展示元素，但是是假元素，无法选中元素 ::after ::before
```

### 说一下盒子模型，以及他们的区别
```
盒子模型分为标准盒模型和怪异盒模型，默认是使用标准盒模型。可以用box-size:border-box来切换为怪异盒模型。
标准盒模型是指盒子的宽高需要加上padding和border，由padding,border,margin,content四部分组成
怪异盒模型是指盒子的宽高只由margin,content组成
```

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
### BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

```
block formatting cotext --- 块级格式化上下文，独立的渲染区域、不会影响边界以外的元素
目的：解决浮动造成父元素塌陷的问题，以及外边距重叠问题
触发条件：position:fixed/absolute，overflow部位visible，float不为none，display为inline-block/flex
常使用的清除浮动的BFC方式只有overflow:hidden，原因是使用float或者position方式清除浮动，虽然父级盒子内部浮动被清除了，但是父级本身又脱离文档流了，会对父级后面的兄弟盒子布局造成影响
```


