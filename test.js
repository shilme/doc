function a(){
  var user = "追梦子"
  console.log(this.user)
  console.log(this)
}
a()

var o = {
  user:"追梦子",
  fn:function(){
      console.log(this.user);
  }
}
o.fn();

function b(){
  var user = "追梦子"
  function a(){
    user ="1"
    console.log(this.user)//undefined
  }
  // a()
}
var a1 = new b()
console.log(a1)
a1.a()


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


"use strict"
function test() {
  var name = 'test';
  var person = {
      name: 'hello',
      say: function () {
          var name = 'world';
          console.log(this.name);//world
      }
  };
  person.say();
}
test()


let arr = [3,2,4,1,5]
function between(a,b)
{
  return function(v){
    return v>=a && v<=b
  }
}
console.log(arr.filter(between(3,5)))


var name="小张",
age="17";
var obj={
  name:"小刘",
  objAge:this.age,
  myFun:function(){
    console.log(this.name+"年龄"+this.age);
  }
}
console.log(obj.objAge);
obj.myFun();

// "use strict"
let hd = {
  user: "abcdef",
  get: function() {
    return () => this.user;
  },
  a:function(){
    return function(){
      this.user
    }
  }
};

console.log(hd.a())

