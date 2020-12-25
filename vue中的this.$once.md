this.once
### $once是一个函数，可以为Vue组件实例绑定一个自定义事件，但该事件只能被触发一次，触发之后随即被移除。

###  $once有两个参数，第一个参数为字符串类型，用来指定绑定的事件名称，第二个参数设置事件的回调函数
```
<template>
  <div>
    <button @click="$emit('jpf')">按钮</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$once('jpf', () => {
      console.log('once');
    });
  }
}
</script>
```
### $once可以多次为同一个事件绑定多个回调，触发时，回调函数按照绑定顺序依次执行
```

<template>
  <div>
    <button @click="$emit('jpf')">按钮</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$once('jpf', () => {
      console.log('1');
    });
    this.$once('jpf', () => {
      console.log('2');
    });
  }
}
</script>
```
### 直接在需要定时器的方法或者生命周期函数中声明并销毁
```
export default{

  methods:{
    fun1(){
      const timer = setInterval(()=>{
      	//需要做的事情
         console.log(11111);
      },1000);
      this.$once('hook:beforeDestroy',()=>{
        clearInterval(timer);
        timer = null;
      })
    }
  }
}
```