### vue?
```
　　vue.js是一个构建数据驱动的Web界面的渐进式框架。vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合，当与单文件组件和vue生态系统支持的库结合使用时，vue也完全能够为复杂的单页应用程序提供驱动。
```
### vue的双向绑定数据的原理
```
　　vue实现数据双向绑定主要是：采用数据劫持结合“发布者 - 订阅者”模式的方式，通过 Object.defineProperty()来劫持各个属性的setter、getter，在数据变动时发布消息给订阅者，触发相应监听回调。
```
### jQuery、vue有什么不同
```
　　jQuery专注视图层，通过操作DOM去实现页面的一些逻辑渲染；vue专注于数据层，通过数据的双向绑定，最终表现在DOM层面，减少了DOM操作。vue使用了组件化思想，使得项目子集职责清晰，提高了开发效率，方便重复利用，便于协同开发。
```

### vue  父子件通信
```
父传子：父组件中数据已知，子组件数据未知子组件想要使用父组件的值
可以用过属性绑定的方式将父组件的值传递给子组件使用
在父组件中，以标签形式使用子组件的时候，可以通过属性绑定，为子组件传递数据，
父组件中需要写，:visible="value"  在vue的data方法里定义变量data
在子组件中如果想用父组件的值，需要在子组件中定义props数组来接受 visible
子传父：子组件给父组件传值，写this.$emit("a")
在父组件标签中写@a="a()" 事件 来接收
```

### vuex 状态管理
```
stata
actions
mutations
getters
model
```
参考：https://blog.csdn.net/x550392236/article/details/80668263

### 路由的监听
```
拦截器
router.beforeEach() 主要做一些鉴权
router.afterEach() 主要做一些鉴权
方式一
 beforeRouteEnter  beforeRouteUpdate  beforeRouteLeave
方式二
$route(to,from){
  console.log(to.path);
}

路由传参：pai rua me s => params  query  还有route路径加参数
```

```
 data:{
     a:1,
     b:{
         c:1
     }
 },
 watch:{
     a(val, oldVal){//普通的watch监听
         console.log("a: "+val, oldVal);
     },
     b:{//深度监听，可监听到对象、数组的变化
         handler(val, oldVal){
             console.log("b.c: "+val.c, oldVal.c);
         },
         deep:true //true 深度监听
     }
 }
```
参考：https://www.cnblogs.com/crazycode2/p/8727410.html

### vue如何去除URL中的#
```
　　vue-router默认使用hash模式，所以在路由加载的时候，项目中的URL会自带“#”。如果不想使用“#”,可以使用vue-router的另一种模式history
```

### vue生命周期的理解
```
　　vue实例有一个完整的生命周期，生命周期也就是指一个实例从开始创建到销毁的这个过程。
　　beforeCreated()：在实例创建之间执行，数据未加载状态。
　　created()：在实例创建、数据加载后，能初始化数据，DOM渲染之前执行。
　　beforeMount()：虚拟DOM已创建完成，在数据渲染前最后一次更改数据。
　　mounted()：页面、数据渲染完成，真实DOM挂载完成。
　　beforeUpadate()：重新渲染之前触发。
　　updated()：数据已经更改完成，DOM也重新render完成，更改数据会陷入死循环。
　　beforeDestory()和destoryed()：前者是销毁前执行(实例仍然完全可用)，后者则是销毁后执行。
```

### 单向数据流和双向数据绑定的优缺点(父子组件传值就是单向数据流)
```
　　单向数据流：顾名思义，数据流是单向的。数据流动方向可以跟踪，流动单一，追查问题的时候可以更快捷。缺点就是写起来不太方便。要使UI发生变更就必须创建各种action来维护对应的state。
　　双向数据绑定：数据之间是相通的，将数据变更的操作隐藏在框架内部。优点是在表单交互较多的场景下，会简化大量与业务无关的代码。缺点就是无法追踪局部状态的变化，增加了出错时debug的难度。
```
### vue-router路由实现
```
　　路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径，来请求不同的资源，请求不同的页面是路由的其中一种功能。
```
### v-if和v-show区别
```
　　使用v-if的时候，如果值为false，那么页面将不会有这个html标签生成。
　　v-show则是不管值为true还是false，html元素都会存在，只是CSS中的display显示或隐藏。
```

### $route和$router的区别
```
　　$router为vueRouter实例，想要导航到不同URL，则使用$router.push方法。
　　$route为当前router跳转对象里面可以获取name、path、query、params等。
```
### vue组件data为什么必须是函数
```
　　因为JS本身的特性带来的，如果data是一个对象，那么由于对象本身属于引用类型，当我们修改其中的一个属性时，会影响到所有vue实例的数据。如果将data作为一个函数返回一个对象，那么每一个实例的data属性都是独立的，不会相互影响了。
```

### vue中computed与watch
### vue中的mixin
### this.$nexttick原理
### v-for与v-if同时出现，那个优先级高，同时存在时怎么优化性能
```
v-for优先于v-if被解析
如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能
优化一:要避免出现这种情况，则在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环
<template v-if="...">
<p v-for="item in itemArrValid" :key="item.id">{{item}}</p>
</template>
```
```
优化二：如果在循环内部进行if判断，我们可以先用computed过滤出有效的展示数据，再进行渲染
<p v-for="item in itemArrValid" :key="item.id">{{item}}</p>
computed:{
	itemArrValid(){
	  // return ...
	  // 处理 itemArr 重的数据
	}
}
```
### v-for 绑定 key 的作用
```
key 的特殊属性主要用在 vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。
如果不使用 key，vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。
使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。

1、更准确
	因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。
2、更快
	利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。(这个观点，就是我最初的那个观点。从这个角度看，map会比遍历更快。)
```
### vue中的data
data可以是一个 Object，也可以是一个 Function。但是组件的定义只接收 function（因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象）
```
var data = { a: 1 }

// 直接创建一个实例
var vm = new vue({
  data: data
})
vm.a // => 1
vm.$data === data // => true

// vue.extend() 中 data 必须是函数
var Component = vue.extend({
  data: function () {
    return { a: 1 }
  }
})
```
### vue 中怎么定义一个全局方法
方法一：
```
// 在 main.js 中
vue.prototype.Fn = function () {
  console.log(‘这是一个全局方法’)
}
```
方法二：
```
// 在 main.js 中
// 一个单独的js文件
// globalFn.js
const data = {
  hello(param){
      return param
  }
}

const install = (vm, option) => {
  vm.prototype.gFn = data
}
export default { install }

// main.js中引入

import gFn from './globalFn.js'
vue.use(gFn)

// 使用

this.gFn.hello('hello')
```
### vue 父子组件生命周期执行顺序
```
1、加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
2、子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
3、父组件更新过程
父beforeUpdate->父updated
4、销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
```
### vue路由跳转有哪两种方式、特点
```
1. router-link
2.this.$router.push 跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面
3.this.$router.replace 跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)
4.this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数
路由传递参数 params参数 query参数
```
https://www.cnblogs.com/dekevin/p/12347793.html

### vue路由的种类
```
Hash:      使用URL的hash值来作为路由。支持所有浏览器。
History:   以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式
Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。
```
### vue插槽
```
slot是父组件与子组件的通信方式，可以将父组件的内容显示在子组件当中。
```