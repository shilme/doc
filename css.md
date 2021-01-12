/* scss是sacc升级版，其兼容sacc功能，又添加了新的功能，语法形式上有些不同，最主要的是sass是靠缩进，scss是花括号 */
```
  align-content: center;
  align-items: center;
  此属性使网格沿行轴对齐
  justify-content: center;
  使网格项内的内容沿行轴对齐
  justify-items: center;
```
```
.flex-center{
  width: 100%;
  height: 100%;
  display: flex;
  /* 垂直居中 */
  align-items: center;
   /* 水平居中 */
  justify-content: center;
}
```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <style>
        html,body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        .content {
            width: 300px;
            height: 300px;
            background: orange;
            margin: 0 auto; /*水平居中*/
            position: relative;
            top: 50%; /*偏移*/
            transform: translateY(-50%);
        }
    </style>
</head>
<body>
    <div class="content"></div>
</body>
</html>
```

### css不可继承属性
```
1:不可继承的:display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、
bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、
page-bread-before、unicode-bidi
```
```
2:所有元素可继承：visibility和cursor。
```
```
3:内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction
```
```
终端块状元素可继承：text-indent和text-align
```
```
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image
```

### less和sass的相同之处
```
Less和Sass在语法上有些共性，比如下面这些：
1、混入(Mixins)——class中的class；
2、参数混入——可以传递参数的class，就像函数一样；
3、嵌套规则——Class中嵌套class，从而减少重复的代码；
4、运算——CSS中用上数学；
5、颜色功能——可以编辑颜色；
6、名字空间(namespace)——分组样式，从而可以被调用；
7、作用域——局部修改样式；
8、JavaScript 赋值——在CSS中使用JavaScript表达式赋值。
```
### less和sass的区别
```
Less是基于JavaScript，是在客户端处理的。
Sass是基于Ruby的，是在服务器端处理的。
关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。
输出设置，Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。
```