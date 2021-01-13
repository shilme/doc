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
var a = "abcdabcdefa"
console.log(a)
function test1(str)
{
  var s  = ""
  for(var i=0; i<str.length;i++)
  {
    var char = str.charAt(i) //这个获取字符串，每个字的值
    var index = s.indexOf(char)//查找s中有没有这个值，有返回其下表，没有返回-1
    if(index ==-1)//如果没找到为-1
    {
      s += char //没找到把值加到s
    }
    else//找到了为下标
    {
      var temp = s.substr(index + 1) //截取字符串
      s = temp + char //
    }
    console.log("第",i,"次",s)
  }
  return s
}

console.log(test1(a))

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


function test(arr,temparr){

  for(let index in arr)
  {
    if(Array.isArray(arr[index]))
    {
      console.log("if",arr[index])
      test(arr[index],temparr)
    }
    else
    {
      console.log("else",arr[index])
      temparr.push(arr[index])
    }
  }
  return temparr
}

var arr = ['1','2','3',['4','5',['6','7']]]
console.log( test(arr,[]))



for(var i=0; i<5; i++)
{
  setTimeout(function(){
    console.log(i)
  },100)
}
// 5
// 5
// 5
// 5
// 5

for(let i=0; i<5; i++)
{
  setTimeout(function(){
    console.log(i)
  },100)
}
// 0
// 1
// 2
// 3
// 4
for(let i=0; i<5; i++)
{
  console.log(i)
}
console.log(i)
//0
// 1
// 2
// 3
// 4
// error
for(var i=0; i<5; i++)
{
  console.log(i)
}
console.log(i)
//0
// 1
// 2
// 3
// 4
// 5