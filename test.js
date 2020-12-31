
// function test(){
//   let x = 1;
//   console.log(this.x); //2
//   // return ()=>{
//   //   console.log(this.x); //2 箭头函数将this指向当前环境上下文,即this指向test中的this,即obj
//   // }
//   return function(){
//     console.log(this.x)
//   }
// },

let obj = {
  x:2,
  fn:function test(){
    let x = 1;
    console.log(this.x); // 2
    return ()=>{
      console.log(this.x); 
    }
    // return function(){
    //   console.log(this.x)
    // }
  },
  fn1:()=>{
    console.log(this.x);
  }
  // fn1: function(){
  //   console.log(this.x)
  // }
};
var fn = obj.fn();
fn();
obj.fn1();


function a(){
  var bb = 1
  console.log(bb)
}
console.log(bb)
a()

var a = {
  user:"1",
  b:function(){
    var user = "2"
    console.log(this.user)
    return  function c(){
      console.log(this)
    }
  }

}
 a.b()
