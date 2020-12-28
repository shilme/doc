
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
    console.log(this.x); //2
    // return ()=>{
    //   console.log(this.x); //2 箭头函数将this指向当前环境上下文,即this指向test中的this,即obj
    // }
    return function(){
      console.log(this.x)
    }
  },
  // fn1:()=>{
  //   console.log(this.x); //undefined 箭头函数将this指向当前环境上下文,即this指向全局环境中的this,即window
  // }
  fn1: function(){
    console.log(this.x)
  }
};
obj.fn()();
// var fn = obj.fn();
// fn();
obj.fn1();