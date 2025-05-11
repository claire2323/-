### css 伪类与伪元素区别

```
在CSS3之前，伪类和伪元素都叫伪类，之后伪类用:表示，伪元素用::表示
区分：都是用来表示文档树以外的元素，核心在于是否创建了"新的元素"
伪类：表示元素的状态，当元素达到一个特定的状态时可以得到一个伪类的样式，但是当状态改变时，又会失去这个样式，例如：:hover :disabled :active :visited
伪元素：看上去像是在元素上添加了新的展示元素，但是是假元素，无法选中元素 ::after ::before
```

### 说一下盒子模型，以及标准情况和 IE 下的区别

```
盒子模型分为标准盒模型和怪异盒模型，默认是使用标准盒模型。可以用box-size:border-box来切换为怪异盒模型。
标准盒模型是指盒子的宽高需要加上padding和border，由padding,border,margin,content四部分组成
怪异盒模型是指盒子的宽高只由margin,content组成
```

### Css 如何画出一个扇形，动手实现下

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

