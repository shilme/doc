### collection 接口
```
该体系结构的根接口，代表一组对象，成为集合
collection 接口下分别为list 与 set 接口
list接口的特点：有序、有下标、元素可重复
set接口的特点：无序、无下标、元素不可重复
list实现类有ArrayList、LinkedList、Vector
set的实现类有HashSet、TreeSet
ArrayList的特点：数组结构实现、查询快、增删慢、JDK1.2版本、运行效率快、线程不安全
ArrayList：如果没有向集合添加任何元素时，容量为0,添加一个元素之后，容量10每次扩容大小是原来的1.5倍

LinkedList的特点：链表结构实现、增删快、查询慢
Vector的特点:数组结构实现、查询快、增删慢、JDK1.0、运行效率慢，查询慢
HashSet的特点：存储结构为哈希表（数组+链表+红黑树）
存储过程:
1、根据hashcode计算保存的位置，如果此位置为空，则直接保存，如果不为空执行第二步
2、在执行equals方法为true,则认为重复

```
### Set集合
```
HashSet：
底层实现为HashMap，值存到HashMap的key里
基于HashCocde实现元素不重复
当存入元素的哈希码相同时，会调用equals进行确认，如结果为true,则拒绝后者存入
TreeSet：
底层实现为TreeMap，值存到TreeMap的key里
基于排列顺序实现元素不重复
```
### Map集合
```
HashMap：
jdk1.2版本、线程不安全、运行效率快，允许用null作为key或者value
HashTable：
jdk1.0版本、线程安全，运行效率慢，不允许null作为key或者value
properties：
HashTable的子类，需求key或value都是String,通常用于配置文件的读取
TreeMap：
实现了SortedMap接口，是Map的子接口，可以对key自动排序
底层实现为红黑树
```

### HashMap
```
特点：
1、存储键值对
2、键不能重复、只可以重复
3、无序
```
```java
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; //hashmap初始容量大小 16
static final int MAXIMUM_CAPACITY = 1 << 30; //hashmap的数组最大容量
static final float DEFAULT_LOAD_FACTOR = 0.75f; //默认加载因子
static final int TREEIFY_THRESHOLD = 8;//jdk1.8 当链表长度大于8时，调成为红黑树
static final int UNTREEIFY_THRESHOLD = 6;//jdk1.8当链表小于6时，调整成链表
static final int MIN_TREEIFY_CAPACITY = 64;//jdk1.8当链表长度大于8时，并且集合元素大于等于64时，调整成红黑树
```


1. HashMap刚创建时，table是null,为了节省空间，当添加第一个元素时，table容量调整为16
2. 当元素个数大于阀值（16*0.75=12）时，会进行扩容，扩容后大小为原来的2倍，目的是减少调整元素的的个数。
3. jdk1.8当每个链表长度大于8，并且数组元素个数等于64时，会调整为红黑树，目的提高执行效率
4. jdk1.8当链表长度小于6时，调整成链表
5. jdk1.8以前，链表是头插入，jdk1.8以后是尾插入

### 锁

乐观锁

```
乐观锁假设数据一般情况下不会造成冲突，所以在数据进行提交更新的时候，才会正式对数据的冲突与否进行检测，如果发现冲突了，则返回给用户错误的信息，让用户决定如何去做
```

悲观锁

```assembly
独占性，排他性，对一条数据进行修改时，线程1会进行加锁，线程1操作完，释放，其他线程才能进行操作
```

自旋锁    CAS（CompareAndSwap 比较并替换）

```
ABA：当m变量等于0时，线程1给变量m加1，线程2也给m加1。那么线程1把变量m等于0，从内存中拿到了cpu计算加1时，线程2已经给变量m加完1后，线程3又给变量m变成0，那么就会出现ABA问题，解决方式给内存中的变量m加上版本号，然后先比较在赋值（CAS），比较线程1的值与内存的值是否一样，如果一样进行赋值，如果不一样就在去内存中去变量m的值进行运算，然后在比较，相同后在赋值。
```

```
原子性：当线程1执行if(0=0) 时，并成功，但还没有进行赋值操作，这就是原子性。保证原子性的方法是，方法调用的操作系统的lock(锁总线) ，当线程1进行写的时候，其他线程无法操作。lock(汇编语言)
```

偏向锁

```
它会偏向于第一个访问锁的线程，在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁。Mark Word的线程ID是第一个线程的线程ID，当第二个线程来访问数据时，发现已经有一个线程了，就会启动CAS进行竞争锁，竞争成功后，Mark Word 的线程ID就变成了第二个线程的线程ID
```

轻量锁

```
while循环判断，比较并替换，为轻量级锁，当竞争激烈就会升级为重量级锁，例如超过10个线程
```

重量锁

```
线程进入操作系统的线程队列，需要操作系统进行线程分配，1:1
```

AtomicIntefer

```java
//原子类
//AtomicIteger

//获取当前值
void getCurrentValue()
//设置value值
void setValue(){}
//先获取旧值，然后设置新值
void getAndSet(){}
//先获取旧值，然后在进行自增
void getAndIncrement()
//先获取旧值，然后在减少
void getAndDecrement()
//先获取旧值，然后在加10
void getAndAdd()
void //先加1，然后获取新值
void incrementAddGet()
//先减1，然后获取值
void decrementAndGet()
//先增加，然后在获取新值
void addAndGet()
```



内存一致性协议

```
按块读取

程序局部性原理，可以提高效率

充分发挥总线cpu针脚等一次性读取更多数据的能力
```

```
缓存行：

缓存行越大，局部性空间效率越高，但读取时间慢

缓存行越小，局部性空间效率越低，但读取时间快

去一个折中值，目前多用：64字节
```

volatile

```
特点：线程可见性，禁止重拍指令
```





