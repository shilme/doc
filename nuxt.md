# nuxt 
### 配置nuxt的IP地址与端口
需要在package.json中进行配置

```
"config":{
    "nuxt":{
        "host":'127.0.0.1',
        "port":'1818'
    }
}
```
### 配置nuxt的全局css
需要在nuxt.config.js中添加

```
css:['~assets/css/normailze.css']
```
### 配置loader打包
需要在nuxt.config.js中配置
```
build:{
    loaders:[
        {
            text:/\.(png|jge?g|gif|svg)$/,
            loader:"url-loader",
            query{
                limit:10000,
                name:'img/[name].[hash].[ext]'
            }
        }
    ]
}
```

### nuxt路由，自动根据pages文件夹下文件创建路由
路由参数传递

```
<nuxt-link :to={name="index", params:{id:1234}}> </nuxt-link>
```

路由参数接收
```
<p> id:{{$route.params.id}} </p>
```

### 动态路由

传递路由
```
<a href="/news/123" new-1 </a>
```
需要根据nuxt规则创建页面

接收参数
```
<template>
    <div>
        <p> id:{{$route.params.id}} </p>
    <div>
<template>
<script>
export default{
    validate({params}){
        return /^\d+$/.text(params.id)
    }
}
</script>    
```