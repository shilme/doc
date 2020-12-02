
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
console.dir(Array(4).fill("后盾人")); //["后盾人", "后盾人", "后盾人", "后盾人"]
console.log([1, 2, 3, 4].fill("后盾人", 1, 2)); //[1, "后盾人", 3, 4]
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