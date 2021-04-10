

<a name="Rxguw"></a>
## vue数据双向绑定的实现原理
 Vue是利用**数据劫持**结合**发布订阅模式**实现的数据双向绑定。在Vue的实现里面，简单来说有四部分：

1. `mvvm`用来初始化数据
1. `observer`用来对初始数据通过`Object.defineProperty`添加`setter`和`getter`，当取数据（即调用get）的时候添加订阅对象（watcher）到数组里， 当给数据赋值（即调用set）的时候就能知道数据的变化，此时调用发布订阅中心的`notify`，从而遍历当前这个数据的订阅数组，执行里面所有的`watcher`，通知变化`update。`
1. `compiler`是用来把data编译到dom中。分三步：
   1. 先把真实的`dom`移入到内存中 `fragment`
   1. 编译：提取想要的元素节点`v-model`和文本节点`{{}}`
   1. 把编译好的`fragment`塞回到页面去。第二步骤中会对编译到dom中的data添加watcher,当data变化时，这里的watcher回调也能收到通知得到执行。
4. watcher是oberver和compiler之间通信的桥梁。
<a name="6SDsR"></a>
## Object.defineProperty的缺点
<a name="PFYmX"></a>
### 无法监听数组变化 
但是vue中是可以监听数组的变化的，Vue重写了以下八种方法：
```javascript
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

<br />实现示例参考：<br />

```javascript
const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];
aryMethods.forEach((method)=> {
    // 这里是原生Array的原型方法
    let original = Array.prototype[method];
   // 将push, pop等封装好的方法定义在对象arrayAugmentations的属性上
   // 注意：是属性而非原型属性
    arrayAugmentations[method] = function () {
        console.log('我被改变啦!');
        // 调用对应的原生方法并返回结果
        return original.apply(this, arguments);
    };
});
let list = ['a', 'b', 'c'];
// 将我们要监听的数组的原型指针指向上面定义的空数组对象
// 别忘了这个空数组的属性上定义了我们封装好的push等方法
list.__proto__ = arrayAugmentations;
list.push('d');  // 我被改变啦！ 4
// 这里的list2没有被重新定义原型指针，所以就正常输出
let list2 = ['a', 'b', 'c'];
list2.push('d');  // 4
```

<br />

<a name="F9NJE"></a>
### 只能劫持对象的属性
因此需要对每个对象的每个属性进行遍历，如果属性值也是对象那么需要深度遍历,显然能劫持一个完整的对象是更好的选择。
<a name="q8AaF"></a>
## vue3为什么用proxy？

1. proxy可以直接监听数组的变化 
1. proxy可以监听对象而非属性.它在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。 
1. Proxy直接可以劫持整个对象,并返回一个新对象。
<a name="a0ON3"></a>
## 总结

- Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改；
- Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利
- Proxy的劣势就是兼容性问题,而且无法用polyfill实现
