# JavaScript Object

**
在 ECMAScript 规范中，引用类型除 Object 本身外，`Date`、`Array`、`RegExp` 也属于引用类型 。


引用类型也即对象类型，ECMA262 把对象定义为：**无序属性的集合，其属性可以包含基本值、对象或者函数**。 也就是说，**对象是一组没有特定顺序的值 。由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度**。因此，对象的值存储在**堆(heap)**中，而**存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问**。具备这种存储结构的，都可以称之为引用类型 。
<a name="SyQ1E"></a>
## Object内部属性
ECMA-262 第 5 版定义了一些内部特性（attribute），用以描述对象属性（property）的各种特征。ECMA-262 **定义这些特性是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了表示特性是内部值，该规范把它们放在了两对儿方括号中**，例如`[[Enumerable]]`。 这些内部特性可以分为两种：**数据属性** 和 **访问器属性 **。
<a name="1Rou7"></a>
### 【1】数据属性
数据属性包含一个数据值的位置，在这个位置可以读取和写入值 。数据属性有4个描述其行为的内部特性：

- `[[Configurable]]`：能否通过 delete 删除属性从而重新定义属性，或者能否把属性修改为访问器属性。该默认值为 true。
- `[[Enumerable]]`：表示能否通过 for-in 循环返回属性。默认值为 true。
- `[[Writable]]`：能否修改属性的值。默认值为 true。
- `[[Value]]`：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为 undefined 。

要修改属性默认的特性，必须使用 ECMAScript 5 的 `Object.defineProperty() `方法。这个方法接收三个参数：**属性所在的对象**、**属性的名字**和**一个描述符对象**。其中，描述符（descriptor）对象的属性必须是：`configurable`、`enumerable`、`writable` 和 `value`。设置其中的一或多个值，可以修改对应的特性值。例如：
```javascript
ar person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
console.log(person.name); //"Nicholas"
person.name = "Greg";
console.log(person.name); //"Nicholas"
```
在调用` Object.defineProperty() `方法时，如果不指定 `configurable`、`enumerable` 和` writable` 特性，其默认值都是`false` 。
<a name="hCSOh"></a>
### 【2】访问器属性
访问器属性不包含数据值，它们包含一对` getter` 和 `setter` 函数（不过，这两个函数都不是必需的）。在**读取访问器属性时，会调用`getter `函数，这个函数负责返回有效的值；在写入访问器属性时，会调用`setter` 函数并传入新值**，这个函数负责决定如何处理数据。访问器属性有如下4 个特性。

- `[[Configurable]]`：表示能否通过 `delete` 删除属性从而重新定义属性，或者能否把属性修改为数据属性。默认值为`true` 。
- `[[Enumerable]]`：表示能否通过 `for-in` 循环返回属性。默认值为` true`。
- `[[Get]]`：在读取属性时调用的函数。默认值为 `undefined` 。
- `[[Set]]`：在写入属性时调用的函数。默认值为 `undefined `。

访问器属性不能直接定义，也必须使用 `Object.defineProperty() `来定义。请看下面的例子：
```javascript
var book = {
    _year: 2004
};
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            console.log('set new value:'+ newValue)
        }
    }
});
book.year = 2005; //set new value:2005
```
<a name="JQHU6"></a>
##  Object 新增 API
ECMA-262 第 5 版对 Object 对象进行了增强，包括 `defineProperty` 在内，共定义了 9 个新的 API：

- `create(prototype[,descriptors])`：用于原型链继承。创建一个对象，并把其 `prototype` 属性赋值为第一个参数，同时可以设置多个 `descriptors` 。
- `defineProperty(O,Prop,descriptor)` ：用于定义对象属性的特性。
- `defineProperties(O,descriptors) `：用于同时定义多个属性的特性。
- `getOwnPropertyDescriptor(O,property)`：获取 defineProperty 方法设置的 property 特性。
- `getOwnPropertyName`s：获取所有的属性名，不包括 prototy 中的属性，返回一个数组。
- `keys()`：和 getOwnPropertyNames 方法类似，但是获取所有的可枚举的属性，返回一个数组。
- `preventExtensions(O) `：用于锁住对象属性，使其不能够拓展，也就是不能增加新的属性，但是属性的值仍然可以更改，也可以把属性删除。
- `Object.seal(O) `：把对象密封，也就是让对象既不可以拓展也不可以删除属性（把每个属性的 configurable 设为 false），单数属性值仍然可以修改。
- `Object.freeze(O) `：完全冻结对象，在 seal 的基础上，属性值也不可以修改（每个属性的 wirtable 也被设为 false）。
<a name="62buN"></a>
## Object函数方法
<a name="e3QnO"></a>
### Object.assign()


将所有可枚举属性的值从一个或多个源对象分配到目标对象，然后返回目标对象。例如：
```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
**如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。**

`Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的`[[Get]]`和目标对象的`[[Set]]`，所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用[`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)和[`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 。
[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)类型和 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 类型的属性都会被拷贝。


但Object.assign()拷贝的是**可枚举的属性值**，所以无法进行深拷贝。**如果源值是一个对象的引用，它仅仅会复制其引用值，**例如：
```javascript
const log = console.log;

function test() {
  'use strict';
  let obj1 = { a: 0 , b: { c: 0}}; 
  let obj2 = Object.assign({}, obj1); 
  log(JSON.stringify(obj2));
  // { a: 0, b: { c: 0}} 

  obj1.a = 1; 
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 0}} 
  log(JSON.stringify(obj2));
  // { a: 0, b: { c: 0}} 

  obj2.a = 2; 
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 0}} 
  log(JSON.stringify(obj2));
  // { a: 2, b: { c: 0}}
 
  // 因为复制的是引用，所以obj2改变obj1的值也会跟着变
  obj2.b.c = 3; 
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 3}} 
  log(JSON.stringify(obj2));
  // { a: 2, b: { c: 3}} 

  // Deep Clone 
  obj1 = { a: 0 , b: { c: 0}}; 
  let obj3 = JSON.parse(JSON.stringify(obj1)); 
  obj1.a = 4; 
  obj1.b.c = 4; 
  log(JSON.stringify(obj3));
  // { a: 0, b: { c: 0}}
}

test();
```
**继承属性和不可枚举属性时不能拷贝的**，例如：
```javascript
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
如果拷贝的是原始类型，则**原始类型会被包装成对象**：
```javascript
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
如果拷贝多个数据，**中间发生异常会终止后续的拷贝**：
```javascript
const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
```
<a name="IdCak"></a>
### Object.create()


**`Object.create()`**方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

```


> Object.create(proto，[propertiesObject])、



**`Object.create()`**接受两个参数，proto是新创建对象的原型对象，propertiesObject是可选的。使用时，需要传入一个对象，该对象的属性类型参照[`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)的第二个参数。如果该参数被指定且不为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。如果`propertiesObject`参数是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或非原始包装对象，则抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 异常。函数返回一个带指定的原型对象和属性的新对象。

下例演示了如何使用`Object.create()`实现类式继承
```javascript
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```
<a name="3oHuL"></a>
### Object.keys()
> `Object.keys` 返回一个**所有元素为字符串的数组**，其元素来自于从给定的`object`上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

```javascript
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```
如果想获取一个对象的所有属性,，甚至包括不可枚举的，请查看[`Object.getOwnPropertyNames`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)。
