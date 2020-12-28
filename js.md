
### 数组
```
new Array() 与 Array.of() 区别
Array.isArray() 检查数组是否存在
Array.from() 字符串转数组,数字不好用,使用数字返回'[]'这个东西
push() 从数组尾部添加
pop() 从数组尾部删除
unshift() 从数组头部添加
shift() 从数组头部移除
fill() 填充数组元素
console.dir(Array(4).fill("我是谁")); //["我是谁", "我是谁", "我是谁", "我是谁"]
console.log([1, 2, 3, 4].fill("我是谁", 1, 2)); //[1, "我是谁", 3, 4]
slice() 使用 slice 方法从数组中截取部分元素组合成新数组（并不会改变原数组），不传第二个参数时截取到数组的最后元素
splice() 使用 splice 方法可以添加、删除、替换数组中的元素，会对原数组进行改变，返回值为删除的元素。删除数组元素第一个参数为从哪开始删除，第二个参数为删除的数量
join() 连接数组
split() 字符串分割成为数组
concat() 数组合并
copyWithin(target, start, end)使用 copyWithin 从数组中复制一部分到同数组中的另外位置。target	必需。复制到指定目标索引位置。start	可选。元素复制的起始位置。end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); //[1, 2, 1, 2]
indexOf() 返回下标，没有找到返回-1
lastIndexOf() 从后面向前找
includes()查找字符串返回值是否存在 true或false
find() 查找，返回第一次找到的值，不继续查找。使用includes等不能查找引用类型，因为它们的内存地址是不相等的。可以方便的查找引用类型
findIndex()  返回索引值，找不到返回-1
reverse() 反转数组序列
sort() 排序
let arr = [1, 4, 2, 9];
console.log(arr.sort(function (v1, v2) {
	return v2 - v1;
})); //[9, 4, 2, 1]
使用排序函数从大到小排序，参数一与参数二比较，返回正数为降序负数为升序
keys()通过迭代对象获取索引
const hd = ["houdunren", "hdcms"];
const keys = hd.keys();
console.log(keys.next());
console.log(keys.next());
values()通过迭代对象获取值
const hd = ["houdunren", "hdcms"];
const values = hd.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
entries 返回数组所有键值对，下面使用解构语法循环

every() 用于递归的检测元素，要所有元素操作都要返回真结果才为真。
some() 函数可以递归的检测元素，如果有一个返回true，表达式结果就是真。第一个参数为元素，第二个参数为索引，第三个参数为原数组。
filter() 过滤
map()映射可以在数组的所有元素上应用函数，用于映射出新的值
reduce() 与 reduceRight() 函数可以迭代数组的所有元素，reduce 从前开始 reduceRight 从后面开始。下面通过函数计算课程点击数的和。
```
### Symbol
```
永远不会重复的字符串
```

### set
```
用于存储任何类型的唯一值，无论是基本类型还是对象引用。

只能保存值没有键名
严格类型检测如字符串数字不等于数值型数字
值是唯一的
遍历顺序是添加的顺序，方便保存回调函数
```
```
let set = new Set()

set.values() 所有存在set的值
set.add() 添加
set.sizi 获取元素数量
set.has() 检测元素是否存在
set.delete() 删除元素，成功返回true
set.clear() 清除所有元素

数组可以转换成为Set类型，去除重复的值
```
```
与 Set 类似，但是我们只能向 WeakSet 添加对象（而不能是原始值）。
对象只有在其它某个（些）地方能被访问的时候，才能留在 set 中。
跟 Set 一样，WeakSet 支持 add，has 和 delete 方法，但不支持 size 和 keys()，并且不可迭代。
```
### map
```
Map是一组键值对的结构，用于解决以往不能用对象做为键的问题

具有极快的查找速度
函数、对象、基本类型都可以作为键或值
```

```
let m = new Map([
  ['ab', 'woshishei'],
  ['ac', 'nishishei']
]);
console.log(m.get('ab'));

get() 通过key值获取value
set() 添加元素
forEach() 循环
has() 判断元素否存在
size() 元素长度
delete() 元素删除
clear() 清除所有元素
keys()/values()/entries() 迭代元素 key value


```

```
WeakMap
  键名必须是对象
  WeaMap对键名是弱引用的，键值是正常引用
  垃圾回收不考虑WeaMap的键名，不会改变引用计数器，键在其他地方不被引用时即删除
  因为WeakMap 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行forEac()遍历等操作
  也是因为弱引用，WeaMap 结构没有keys( )，values( )，entries( )等方法和 size 属性
  当键的外部引用删除时，希望自动删除数据时使用 WeakMap
  WeakSet 支持 add，has 和 delete 方法
```

### 函数
```
//arguments 是函数获得到所有参数集合
function sum() {
  return [...arguments].reduce((total, num) => {
    return (total += num);
  }, 0);
}
console.log(sum(2, 3, 4, 2, 6)); //17


//更建议使用展示语法
function sum(...args) {
 return args.reduce((a, b) => a + b);
}
console.log(sum(2, 3, 4, 2, 6)); //17
```



### 对象
```
对象是属性和方法的集合即封装
将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象
继承是通过代码复用减少冗余代码
根据不同形态的对象产生不同结果即多态
```
```
valueOf与toString 可以自定义valueOf 与 toString 方法用来转换，转换并不限制返回类型
let hd = {
  name: "我是你",
  num: 1,
  valueOf: function() {
    console.log("valueOf");
    return this.num;
  },
  toString: function() {
    console.log("toString");
    return this.name;
  }
};

```

```
delete 删除属性
hasOwnProperty 检测对象自身是否包含指定的属性，不检测原型链上继承的属性
in 检测原型对象上有没有属性
Object.assign(参数1，参数2)  合并属性
Object.keys(hd) Object.values(hd) Object.entries(hd)
浅拷贝可以通过 for/in/Object.assign({},参数2) 实现
深拷贝为两个对象是完全独立的对象
严格模式下方法中的this值为undefined,这是为了防止无意的修改window对象
JS中大部分数据类型都是通过构造函数创建的
Object.getOwnPropertyDescriptor 查看对象属性的描述
configurable	能否使用delete、能否需改属性特性、或能否修改访问器属性	默认值true
enumerable	对象属性是否可通过for-in循环，或Object.keys() 读取	默认值true
writable	对象属性是否可修改	默认值true
value	对象属性的默认值	默认值undefined
Object.defineProperty 修改属性特征
Object.preventExtensions(对象参数1) 禁止向对象添加属性
Object.isExtensible 判断是否能向对象中添加属性
Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为 configurable: false
Object.isSealed 如果对象是密封的则返回 true，属性都具有 configurable: false
Object.freeze 冻结对象后不允许添加、删除、修改属性，writable、configurable都标记为false
Object.isFrozen()方法判断一个对象是否被冻结
getter/setter
使用 defineProperty 可以模拟定义私有属性
代理（拦截器）是对象的访问控制，setter/getter 是对单个对象属性的控制，而代理是对整个对象的控制1、读写属性时代码更简洁2、对象的多个属性控制统一交给代理完成3、严格模式下 set 必须返回布尔值
```
```
使用 defineProperty 可以模拟定义私有属性
function User(name, age) {
  let data = { name, age };
  Object.defineProperties(this, {
    name: {
      get() {
        return data.name;
      },
      set(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        data.name = value;
      }
    },
    age: {
      get() {
        return data.name;
      },
      set(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        data.name = value;
      }
    }
  });
}
let hd = new User("我是用户", 33);
console.log(hd.name);
hd.name = "我是名字";
console.log(hd.name);
```
```
//使用代理
"use strict";
const hd = { name: "我的名字" };
const proxy = new Proxy(hd, {
  get(obj, property) {
    return obj[property];
  },
  set(obj, property, value) {
    obj[property] = value;
    return true;
  }
});
proxy.age = 10;
console.log(hd);

//下面使用 apply 计算函数执行时间
function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
  apply(func, obj, args) {
    console.time("run");
    func.apply(obj, args);
    console.timeEnd("run");
  }
});
proxy.apply(this, [1, 2, 3]);

//下例中对数组进行代理，用于截取标题操作
const stringDot = {
  get(target, key) {
    const title = target[key].title;
    const len = 5;
    return title.length > len
      ? title.substr(0, len) + ".".repeat(3)
      : title;
  }
};
const lessons = [
  {
    title: "媒体查询响应式布局",
    category: "css"
  },
  {
    title: "FLEX 弹性盒模型",
    category: "css"
  },
  {
    title: "MYSQL多表查询随意操作",
    category: "mysql"
  }
];
const stringDotProxy = new Proxy(lessons, stringDot);
console.log(stringDotProxy[0]);
```
