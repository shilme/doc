js 数组去重

### 1、reduce 去重
```
var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
},[]);

const assetList = assetId.reduce((pre, cur, index, assetId) => {
  if (pre.includes(cur) === false) {
    pre = [...pre, cur]
  }
  return pre
}, [])
```
### 2、双重for循环
```
unique(arr) {
  var hash = []
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          ++i
        }
      }
      hash.push(arr[i])
    }
  return hash
}
```
### 3、set 去重

### 4、indexof 去重
```
var arr =[1,-5,-4,0,-4,7,7,3];
function unique(arr){
  var arr1 = [];/ 新建一个数组来存放arr中的值
  for(var i=0,len=arr.length;i<len;i++){
    if(arr1.indexOf(arr[i]) === -1){
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(unique(arr));    // 1, -5, -4, 0, 7, 3
```