### 原型与继承
```
prototype 用于实例对象使用,__proto__用于函数对象使用
Object.setPrototypeOf 设置对象的原型
Object.getPrototypeOf 获取一个对象的原型
instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
hasOwnProperty  只检测当前对象
借用原型 使用 call 或 apply 可以借用其他原型方法完成功能
this 不受原型继承影响,this 指向调用属性时使用的对象
constructor 指向当前构造函数
Object.create 设置对象原型
prototype 函数也是对象也有原型，函数有 prototype 属性指向他的原型
在实例化对象上存在 __proto__ 记录了原型，所以可以通过对象访问到原型的属性或方法
__proto__ 内部使用的是seter/gettr 但是定义是不建议使用，建议使用getter/setter 控制值
constructor构造函数在prototype身上

```
# 实现继承
```
function User() {}
User.prototype.getUserName = function() {};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.email = function() {};
console.log(new Admin());
console.log(new Member());
```
# 构造函数 constructor
```
function User() {}
function Admin() {}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

let xj = new Admin();
console.log(xj.constructor); //constructor丢失，返回User构造函数

Admin.prototype.constructor = Admin;

let hd = new Admin();
console.log(hd.constructor); //正确返回Admin构造函数

//现在可以通过对象获取构造函数来创建新对象了
console.log(new hd.constructor());
```

```
function User() {}
function Admin(name) {
  this.name = name;
}

Admin.prototype = Object.create(User.prototype);

//使用Object.defineProperty 禁止遍历对象
Object.defineProperty(Admin.prototype, "constructor", {
  value: Admin,
  enumerable: false //禁止遍历
});
```
# 方法重写
```
function Person() {}
Person.prototype.getName = function() {
  console.log("parent method");
};

function User(name) {}
User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

User.prototype.getName = function() {
  //调用父级同名方法
  Person.prototype.getName.call(this);
  console.log("child method");
};
let hd = new User();
hd.getName();
```
# 多态实现
```
function User() {}
User.prototype.show = function() {
  console.log(this.description());
};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.description = function() {
  return "管理员在此";
};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.description = function() {
  return "我是会员";
};

function Enterprise() {}
Enterprise.prototype = Object.create(User.prototype);
Enterprise.prototype.description = function() {
  return "企业帐户";
};

for (const obj of [new Admin(), new Member(), new Enterprise()]) {
  obj.show();
}
```
### this指向了windows
```
function User(name) {
  this.name = name;
  console.log(this);// Window
}
User.prototype.getUserName = function() {
  return this.name;
};

function Admin(name) {
  User(name);
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

let a = new Admin("我是管理员");
console.log(a.getUserName()); //undefined
```
### 解决this指向了windows
```
function User(name) {
  this.name = name;
  console.log(this); // Admin
}
User.prototype.getUserName = function() {
  return this.name;
};

function Admin(name) {
  User.call(this, name);
}
Admin.prototype = Object.create(User.prototype);

let a = new Admin("我是管理员");
console.log(a.getUserName()); //我是管理员
```
### 原型工厂实现例子
```
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  sub.prototype.constructor = sub;
}

function Access() {}
function User() {}
function Admin() {}
function Member() {}

extend(User, Access); //User继承Access
extend(Admin, User); //Admin继承User
extend(Member, Access); //Member继承Access

Access.prototype.rules = function() {};
User.prototype.getName = function() {};

console.log(new Admin()); // 继承关系: Admin>User>a>Object
console.log(new Member()); //继承关系：Member>Access>Object
```
### 对象工厂实现例子
```
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.show = function() {
  console.log(this.name, this.age);
};

function Admin(name, age) {
  let instance = Object.create(User.prototype);
  User.call(instance, name, age);
  instance.role=function(){
    console.log('admin.role');
  }
  return instance;
}
let wl = Admin("王六", 19);
wl.show();

function member(name, age) {
  let instance = Object.create(User.prototype);
  User.call(instance, name, age);
  return instance;
}
let lisi = member("李四", 28);
lisi.show();
```
### mixin 实现
```
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  sub.prototype.constructor = sub;
}

User.prototype.show = function() {
  console.log(this.name, this.age);
};

const Request = {
  ajax() {
    console.log("请求后台");
  }
};
const Credit = {
  __proto__: Request, //继承
  total() {
    console.log("统计积分");
  }
};
function User(name, age) {
  this.name = name;
  this.age = age;
}
function Admin(...args) {
  User.apply(this, args);
}
extend(Admin, User);
Object.assign(Admin.prototype, Request, Credit);
let hd = new Admin("名字", 19);
hd.show();
hd.total(); //统计积分
hd.ajax(); //请求后台
```