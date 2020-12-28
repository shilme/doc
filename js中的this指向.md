### this指向
#### 例子1
```
function a(){
    var user = "我是用户";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a();
```
#### 例子2
```
function a(){
    var user = "我是用户";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();
```
#### 例子3
```
var o = {
    user:"我是用户",
    fn:function(){
        console.log(this.user); //我是用户
    }
}
window.o.fn();
```
#### 例子4
```
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();
```
#### 例子5
```
var o = {
    a:10,
    b:{
        // a:12,
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();
```
#### 例子6
```
function Fn(){
    this.user = "我的名字";
}
var a = new Fn();
console.log(a.user); //我的名字
```
#### 例子7
```
function test(){
  let x = 1;
  console.log(this.x); //2
  return ()=>{
    console.log(this.x); //2 箭头函数将this指向当前环境上下文,即this指向test中的this,即obj
  }
}
let obj = {
  x:2,
  fn:test,
  fn1:()=>{
    console.log(this.x); //undefined 箭头函数将this指向当前环境上下文,即this指向全局环境中的this,即window
  }
};
var fn=obj.fn();
fn();
obj.fn1();
```

```
var fun = function(){
  this.name = 'peter';
  return 'jack';
}
var p = new fun();
console.log(p.name)// peter
```
#### 例子9
```
var fun = function(){}

fun.prototype = {
    info : {
    name : 'peter',
    age : 25
    }
}

var a = new fun();
var b = new fun();

a.info.name = 'jack';
b.info.name = 'tom';
console.log(a.info.name)//tom
console.log(b.info.name)//tom
```
#### 例子10
```
var fun = function(){
  this.info = {
  name : 'peter',
  age : 25
  }
}

var a = new fun();
var b = new fun();

a.info.name = 'jack';
b.info.name = 'tom';
console.log(a.info.name)//jack
console.log(b.info.name)//tom
```
#### 例子11
```
var fun = function(){}

fun.prototype = {
    name : 'peter',
    age : 25
}

var a = new fun();
var b = new fun();

a.name = 'jack';
b.name = 'tom';
console.log(a.name)//jack
console.log(b.name)//tom
```
#### 例子12
```
var fun = function(){
  this.info = {
  name : 'peter',
  age : 25
  }
}

fun.prototype = {
  info : {
  name : 'peter',
  age : 25
  }
}

var a = new fun();
var b = new fun();

a.info.name = 'jack';
b.info.name = 'tom';
console.log(a.info.name)//jack
console.log(b.info.name)//tom
```

```
当this碰到return时：如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例
```
```
//当this遇到function(){}
function fn()
{
    this.user = '我的名字';
    return function(){};
}
var a = new fn;
console.log(a.user); //undefined
```
```
//当this遇到{}
function fn()
{
    this.user = '我的名字';
    return {};
}
var a = new fn;
console.log(a.user); //undefined
```
```
//当this遇到 1
function fn()
{
    this.user = '我的名字';
    return 1;
}
var a = new fn;
console.log(a.user); //我的名字
```
```
//当this遇到 undefined
function fn()
{
    this.user = '我的名字';
    return undefined;
}
var a = new fn;
console.log(a.user); //我的名字
```
```
//当this遇到 null
function fn()
{
    this.user = '我的名字';
    return null;
}
var a = new fn;
console.log(a.user); //我的名字
```

### bind apply call 区别

```
构造函数中的this默认是一个空对象，然后构造函数处理后把这个空对象变得有值
apply 用数组传参
call 需要分别传参
与 bind 不同 call/apply 会立即执行函数
bind 复制了一份
bind 先传参的 不会被后传参的覆盖掉
```
```
//例子1
function test(){
  let x = 1;
  console.log(this.x); // 2
}
let obj={
  x:2,
};
test.call(); //undefined
test.call(obj); //2
test.apply(); //undefined
test.apply(obj); //2
let fn0=test.bind();
fn0(); //undefined
let fn=test.bind(obj);
fn(); //2
```
```
//例子2
function User(name) {
  this.name = name;
}
let aa = {};
User.call(aa, "123456");
console.log(aa.name); //123456
```