### Docker环境安装

查看所有镜像

```
docker images
在宿主机查看docker使用cpu、内存、网络、io情况：
docker stats -a
删除容器及镜像
1.首先查询容器ID
2.关闭容器
docker stop 容器ID
3.删除容器
docker rm 容器ID
4.查看镜像ID
docker images
5.删除容器
docker rmi 镜像ID

```
安装yum-utils：

```
yum install -y yum-utils device-mapper-persistent-data lvm2
```
为yum源添加docker仓库位置：
```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
安装docker：
```
yum install docker-ce
```
启动docker：
```
systemctl start docker
```
mysql 安装
下载mysql5.7的docker镜像：

```
docker pull mysql:5.7

```

```
提示：Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
无法连接到unix:///var/run上的Docker守护程序/码头工人.sock. docker守护进程正在运行吗？

```

使用docker命令启动：

```
docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root  \
-d mysql:5.7

```
参数说明
```
-p 3306:3306：将容器的3306端口映射到主机的3306端口
-v /mydata/mysql/conf:/etc/mysql：将配置文件夹挂在到主机
-v /mydata/mysql/log:/var/log/mysql：将日志文件夹挂载到主机
-v /mydata/mysql/data:/var/lib/mysql/：将数据文件夹挂载到主机
-e MYSQLROOTPASSWORD=root：初始化root用户的密码
```
进入运行mysql的docker容器：

```
docker exec -it mysql /bin/bash
```
使用mysql命令打开客户端：

```
mysql -uroot -prot --default-character-set=utf8
```
创建mall数据库：

```
create database mall character set utf8
```
安装上传下载插件，并将docment/sql/mall.sql上传到Linux服务器上：

```
yum -y install lrzsz

```
将mall.sql文件拷贝到mysql容器的/目录下：

```
docker cp /mydata/mall.sql mysql:/
```
将sql文件导入到数据库：
```
use mall;
source /mall.sql;
```
创建一个reader帐号并修改权限，使得任何ip都能访问grant all privileges on
```
grant all privileges on *.* to 'reader' @ '%' identified  by '123456'; //语法错误
```
```
执行完sql 报错
Expression #1 of ORDER BY clause is not in GROUP BY clause and contains nonaggregated column 'information_schema.PROFILING.SEQ' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
ORDER BY子句的表达式#1不在GROUP BY子句中，并且包含未聚合的列信息_schema.PROFILING.SEQ格式'在功能上不依赖于GROUP BY子句中的列；这与sql\u mode=only\u full\u GROUP\u BY不兼容

```
### Redis安装
```
docker pull redis:3.2
```
使用docker命令启动：
```
docker run --name redis -d -p 6379:6379 -d redis --requirepass "123456"
docker run -p 6379:6379 --name redis \
-v /mydata/redis/data:/data \
-d redis:3.2 redis-server --appendonly yes
```

进入redis容器使用redis-cli命令进行连接：
```
docker exec -it redis redis-cli
```
### Nginx 安装
```
docker pull nginx:1.10
```
先运行一次容器（为了拷贝配置文件）：
```
docker run -p 80:80 --name nginx \
-v /mydata/nginx/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx  \
-d nginx:1.10
```
将容器内的配置文件拷贝到指定目录
```
docker container cp nginx:/etc/nginx /mydata/nginx/
```
修改文件名称：
```
mv nginx conf
```
终止并删除容器：
```
docker stop nginx
docker rm nginx
```
使用docker命令启动：
```
docker run -p 80:80 --name nginx \
-v /mydata/nginx/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx  \
-v /mydata/nginx/conf:/etc/nginx \
-d nginx:1.10
```
### RabbitMQ安装
```
docker pull rabbitmq:3.7.15
```
使用docker命令启动：
```
docker run -d --name rabbitmq \
--publish 5671:5671 --publish 5672:5672 --publish 4369:4369 \
--publish 25672:25672 --publish 15671:15671 --publish 15672:15672 \
rabbitmq:3.7.15
```
进入容器并开启管理功能：
```
docker exec -it rabbitmq /bin/bash
rabbitmq-plugins enable rabbitmq_management
```
开启防火墙：
```
firewall-cmd   --zone=public   --add-port=15672/tcp   --permanent
firewall-cmd   --reload
```
```
输入账号密码并登录：guest guest
```
### Elasticsearch安装

下载elasticsearch6.4.0的docker镜像：
```
docker pull elasticsearch:6.4.0
```
修改虚拟内存区域大小，否则会因为过小而无法启动:
```
sysctl -w vm.max_map_count=262144
```
使用docker命令启动：
```
docker run -p 9200:9200 -p 9300:9300 --name elasticsearch \
-e "discovery.type=single-node" \
-e "cluster.name=elasticsearch" \
-v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \
-d elasticsearch:6.4.0
```
启动时会发现/usr/share/elasticsearch/data目录没有访问权限，只需要修改/mydata/elasticsearch/data目录的权限，再重新启动。
```
chmod 777  /mydata/elasticsearch/data/
```
安装中文分词器IKAnalyzer，并重新启动：
```
docker exec -it elasticsearch /bin/bash
```
```
#此命令需要在容器中运行
elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.4.0/elasticsearch-analysis-ik-6.4.0.zip
docker restart elasticsearch
```
开启防火墙：
```
firewall-cmd   --zone=public   --add-port=9200/tcp   --permanent
firewall-cmd   --reload
```

### kibana安装
下载kibana6.4.0的docker镜像：
```
docker pull kibana:6.4.0
```
使用docker命令启动：
```
docker run --name kibana -p 5601:5601 \
--link elasticsearch:es \
-e "elasticsearch.hosts=http://es:9200" \
-d kibana:6.4.0
```
开启防火墙：
```
firewall-cmd  --zone=public  --add-port=5601/tcp  --permanent
firewall-cmd  --reload
```

### Mongodb安装
下载mongo3.2的docker镜像：
```
docker pull mongo:3.2
```
使用docker命令启动：
```
docker run -p 27017:27017 --name mongo \
-v /mydata/mongo/db:/data/db \
-d mongo:3.2
```