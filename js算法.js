function test() {
    var name = 'test';
    var person = {
        name: 'hello',
        say: function () {
            var name = 'world';
            console.log(this.name);
        }
    };
    person.say()
}
test();

function test(){
    var name = "test";
    var person = {
        name : "hello",
        say: ()=>{
            var name = 'world';
            console.log(this.name);
        }
    }
    person.say();
}
test();

//2、获取给定字符串中最长无重复字符的子字符串，例如：'adgadgz' => 'adgz'
var lengthOfLongestSubstring = function(s) {
    var res = 0; // 用于存放当前最长无重复子串的长度
    var str = ""; // 用于存放无重复子串
    var len = s.length;
    for(var i = 0; i < len; i++) {
      var char = s.charAt(i);
      var index = str.indexOf(char);
      if(index === -1) {
        str += char;
        res = res < str.length ? str.length : res;
      } else {
        str = str.substr(index + 1) + char;
      }
    }
    console.log(str)
    return res;
};
console.log(lengthOfLongestSubstring("adgadgz"))

//3.
// 请实现 multiply 方法
a.multiply();

const a = [1, 2, 3, 4, 5];
let array = []
for(let i = 0; i<a.length; i++){
    array.push(a[i])
}
for(let b = 0; b<a.length; b++){
    array.push(a[b]*a[b])
}
console.log(array)
console.log(a); // 输出 [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]


var arr = [
  {
    name: "mingzi",
    mag:'xiaoxi'
  },{
    name: "mingzi",
    mag:'xiaoxi'
  },{
    name: "mingzi1",
    mag:'xiaoxi1'
  },
]
var copyArr = []
for(let model of arr)
{
  var index = copyArr.findIndex(el=> el.name === model.name)
  console.log(index)
  if(index < 0)
  {
    copyArr.push(model)
  }
}
console.log(copyArr)


// 判断对象里有没有值

var a = {
  name:undefined,
  value:undefined
}

var aa  = Object.values(a).length > 0
console.log(aa)

//不好使