### 闭包
```
闭包指子函数可以访问外部作用域变量的函数特性，即使在子函数作用域外也可以访问。如果没有闭包那么在处理事件绑定，异步请求时都会变得困难。
```
```

function hd() {
  let name = 'abcdef';
  return function () {
  	return name;
  }
}
let hdcms = hd();
console.log(hdcms()); //abcdef

```
```
//使用闭包返回数组区间元素
let arr = [3, 2, 4, 1, 5, 6];
function between(a, b) {
  return function(v) {
    return v >= a && v <= b;
  };
}
console.log(arr.filter(between(3, 5)));
```

```
let lessons = [
  {
    title: "媒体查询响应式布局",
    click: 89,
    price: 12
  },
  {
    title: "FLEX 弹性盒模型",
    click: 45,
    price: 120
  },
  {
    title: "GRID 栅格系统",
    click: 19,
    price: 67
  },
  {
    title: "盒子模型详解",
    click: 29,
    price: 300
  }
];
function order(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
console.table(lessons.sort(order("price")));
```
```
//内存泄露
<body>
  <div desc="houdunren">我是1</div>
  <div desc="hdcms">我是2</div>
</body>
<script>
  let divs = document.querySelectorAll("div");
  divs.forEach(function(item) {
    item.addEventListener("click", function() {
      console.log(item.getAttribute("desc"));
    });
  });
</script>
```
```
//修正内存泄露
let divs = document.querySelectorAll("div");
divs.forEach(function(item) {
  let desc = item.getAttribute("desc");
  item.addEventListener("click", function() {
    console.log(desc);
  });
  item = null;
});
```
```
//this指向window
let hd = {
  user: "abcdef",
  get: function() {
    return function() {
      return this.user;
    };
  }
};
console.log(hd.get()()); //undefined
```
```
//用箭头函数修正 this指向window
let hd = {
  user: "abcdef",
  get: function() {
    return () => this.user;
  }
};
console.log(hd.get()()); //undefined
```