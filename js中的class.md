### class
```
constructor 会在 new 时自动执行
class 里定义的fuction 定义在prototype中
clas 定义的  不会使用 for(key in 对象) 遍历出来东西
class 默认使用strict 严格模式执行
静态放在了 _proto_上边
使用 isPrototypeOf 判断一个对象是否在另一个对象的原型链中
```
# 实现 静态属性
```
//非class 实现 静态属性
function User() {}
User.site = "我是site";
console.dir(User);

const hd = new User();
console.log(hd.site); //undefiend
console.log(User.site); //我是site
```
```
//class 实现静态
class Request {
  static HOST = "https://www.baidu.com";

  query(api) {
    return Request.HOST + "/" + api;
  }
}
let request = new Request();
```
# 实现静态方法
```
// 非class 实现静态方法
function User() {
  this.show = function() {
    return "this is a object function";
  };
}
User.show = function() {
  return "welcome to china";
};
const xj = new User();
console.dir(xj.show()); //this is a object function
console.dir(User.show()); //welcome to china
```
```
// class 实现静态方法
class User {
  constructor(name) {
    this.name = name;
  }
  static create(name) {
    return new User(name);
  }
}
const mc = User.create("名称");
console.log(mc);
```
# 实现继承
```
//非class 实现继承
function User(name) {
  this.name = name;
}
function Admin(name) {
  User.call(this, name);
}
let hd = new Admin("名称");
console.log(hd);
```
```
//class 实现继承
class User {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends User {
  constructor(name) {
    super(name);
  }
}
let hd = new Admin("用户");
console.log(hd);
```
# 静态继承
```
//非class 静态继承

function User() {}
User.site = "站点";

User.url = function() {
  return "baidu.com";
};

function Admin() {}
Admin.__proto__ = User;
console.dir(Admin);
console.log(Admin.url());
```
```
//class 静态继承

class User {
  static site = "站点";
  static host() {
    return "baidu.com";
  }
}
class Admin extends User {}
console.dir(Admin);
```
# 实现private
```
//属性或方法名前加 # 为声明为私有属性
//私有属性只能在声明的类中使用
class User {
  //private
  #host = "https://baidu.com";
  constructor(name) {
    this.name = name ;
    this.#check(name);
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非常网址");
    }
    this.#host = url;
  }
  get host() {
    return this.#host;
  }
  #check = () => {
    if (this.name.length <= 5) {
      throw new Error("用户名长度不能小于五位");
    }
    return true;
  };
}

let hd = new User("我的用户名");
hd.host = "https://www.baidu.com";
console.log(hd.host);
```
