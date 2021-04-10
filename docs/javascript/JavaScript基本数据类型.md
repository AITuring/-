# JavaScript基本数据类型

<br />JavaScript中有七种数据类型，分为基本类型和引用类型：

- 基本类型
   - String
   - Number
   - Boolean
   - Symbol
   - Underfined
   - Null
- 引用类型
   - Object
<a name="T5n0G"></a>
### **1、String 类型**
String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串 。
<a name="XUqxk"></a>
#### 1.1 存储结构
由于计算机只能处理数字，如果要处理文本，就必须先把文本转换为数字才能处理。**在计算机中，1个字节（byte）由 8个比特（bit）组成，所以 1 个字节能表示的最大整数就是 255**，**如果想表示更大整数，就必须用更多的字节，比如 2 个字节可以表示的最大整数为 65535** 。最早，只有 127 个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为 ASCII** **编码，比如大写字母 A 的编码是 65，小写字母 z 的编码是122。<br />但如果要表示中文字符，显然一个字节是不够的，至少需要两个字节。所以，中国制定了 GB2312 编码，用来表示中文字符。基于同样的原因，各个国家都制定了自己的编码规则 。这样就会出现一个问题，即在多语言混合的文本中，不同的编码会出现冲突，导致乱码出现 。<br />为了解决这个问题，Unicode 编码应运而生，**它把所有的语言都统一到一套编码中，采用 2 个字节表示一个字符，即最多可以表示 65535 个字符，这样基本上可以覆盖世界上常用的文字，如果要表示更多的文字，也可以采用 4 个字节进行编码，这是一种通用的编码规范** 。<br />因此，**JavaScript 中的字符也采用 Unicode 来编码** ，也就是说，**JavaScript 中的英文字符和中文字符都会占用 2 个字节的空间大小** ，这种多字节字符，通常被称为宽字符。
<a name="AT51n"></a>
#### 1.2 基本包装类型
在 JavaScript 中，字符串是基本数据类型，本身不存任何操作方法 。为了方便的对字符串进行操作，ECMAScript 提供了一个**基本包装类型：String 对象** 。它是一种特殊的引用类型，JS引擎每当读取一个字符串的时候，就会在内部创建一个对应的 String 对象，该对象提供了很多操作字符的方法，这就是为什么能对字符串调用方法的原因 。<br />

```javascript
var name = 'JavaScript';
var value = name.substr(2,1);
```
当第二行代码访问变量 str 时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值。而在读取模式中访问字符串时，引擎内部会自动完成下列处理：

- 创建 String 类型的一个实例
- 在实例上调用指定的方法
- 销毁这个实例

用伪代码形象的模拟以上三个步骤：
```javascript
var obj = new String('JavaScript'); 
var value = obj.substr(2,1); 
name = null; 
```
可以看出，**基本包装类型是一种特殊的引用类型。它和普通引用类型有一个很重要的区别，就是对象的生存期不同 。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。**在 JavaScript 中，类似的基本包装类型还有 Number、Boolean 对象 。
<a name="CfebT"></a>
#### **2、Number 类型**
**JavaScript 中的数字类型只有 Number 一种，Number 类型采用 IEEE754 标准中的 “双精度浮点数” 来表示一个数字，不区分整数和浮点数 。**
<a name="jcsiG"></a>
#### 2.1 存储结构
**在 IEEE754 中，双精度浮点数采用 64 位存储，即 8 个字节表示一个浮点数** 。其存储结构如下图所示：<br />![](https://cdn.nlark.com/yuque/0/2020/png/524079/1608537711998-ab4bf9f1-0e2b-441d-816c-e3b6e81cad02.png#align=left&display=inline&height=142&margin=%5Bobject%20Object%5D&originHeight=218&originWidth=786&size=0&status=done&style=none&width=512)<br />指数位可以通过下面的方法转换为使用的指数值：<br />![](https://cdn.nlark.com/yuque/0/2020/png/524079/1608537711989-179c7661-af22-4134-87f9-56d53c17b8bb.png#align=left&display=inline&height=419&margin=%5Bobject%20Object%5D&originHeight=584&originWidth=800&size=0&status=done&style=none&width=574)
<a name="QZ0lF"></a>
#### 2.2 数值范围
从存储结构中可以看出， 指数部分的长度是11个二进制，即指数部分能表示的最大值是 2047（2-1），取中间值进行偏移，用来表示负指数，也就是说指数的范围是 [-1023,1024] 。因此，这种存储结构能够表示的数值范围为 2到 2，超出这个范围的数无法表示 。2 和 2转换为科学计数法如下所示：
> 1.7976931348623157 × 10
> 5 × 10

因此，JavaScript 中能表示的最大值是 1.7976931348623157 × 10，最小值为 5 × 10 。<br />这两个边界值可以分别通过访问 Number 对象的 MAX_VALUE 属性和 MIN_VALUE 属性来获取：
```javascript
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
```
如果数字超过最大值或最小值，JavaScript 将返回一个不正确的值，这称为 “正向溢出(overflow)” 或 “负向溢出(underflow)” 。 
```javascript
Number.MAX_VALUE+1 == Number.MAX_VALUE; //true
Number.MAX_VALUE+1e292; //Infinity
Number.MIN_VALUE + 1; //1
Number.MIN_VALUE - 3e-324; //0
Number.MIN_VALUE - 2e-324; //5e-324
```
<a name="jfahB"></a>
#### 2.3 数值精度
在 64 位的二进制中，符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。<br />IEEE754 规定，有效数字第一位默认总是1 。因此，在表示精度的位数前面，还存在一个 “隐藏位” ，固定为 1 ，但它不保存在 64 位浮点数之中。也就是说，有效数字总是 1.xx...xx 的形式，其中 xx..xx 的部分保存在 64 位浮点数之中，最长为52位 。所以，JavaScript 提供的有效数字最长为 53 个二进制位，其内部实际的表现形式为：<br />(-1)^符号位 * 1.xx...xx * 2^指数位<br />这意味着，JavaScript 能表示并进行精确算术运算的整数范围为：[-2-1，2-1]，即从最小值 `-9007199254740991` 到最大值 `9007199254740991 `之间的范围 。
```javascript
Math.pow(2, 53)-1 ; // 9007199254740991
-Math.pow(2, 53)-1 ; // -9007199254740991
```
可以通过` Number.MAX_SAFE_INTEGER` 和  `Number.MIN_SAFE_INTEGER` 来分别获取这个最大值和最小值。 
```javascript
console.log(Number.MAX_SAFE_INTEGER) ; // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) ; // -9007199254740991
```
对于超过这个范围的整数，JavaScript 依旧可以进行运算，但却不保证运算结果的精度。
```javascript
Math.pow(2, 53) ; // 9007199254740992
Math.pow(2, 53) + 1; // 9007199254740992
9007199254740993; //9007199254740992
90071992547409921; //90071992547409920
0.923456789012345678;//0.9234567890123456
```
<a name="AsX2Z"></a>
#### 2.4* 精度丢失(为何0.1+0.2！=0.3)
计算机中的数字都是以二进制存储的，**如果要计算 0.1 + 0.2 的结果，计算机会先把 0.1 和 0.2 分别转化成二进制，然后相加，最后再把相加得到的结果转为十进制** 。<br />**但有一些浮点数在转化为二进制时，会出现无限循环** 。比如， 十进制的 0.1 转化为二进制，会得到如下结果：
> 0.0001 1001 1001 1001 1001 1001 1001 1001 …（1001无限循环）

而存储结构中的尾数部分最多只能表示 53 位。为了能表示 0.1，只能模仿十进制进行四舍五入了，但二进制只有 0 和 1 ， 于是变为 0 舍 1 入 。 因此，0.1 在计算机里的二进制表示形式如下：
> 0.0001100110011001100110011001100110011001100110011001101

用标准计数法表示如下：
> (−1)× 2× (1.1001100110011001100110011001100110011001100110011010)2

同样，0.2 的二进制也可以表示为： 
> (−1)× 2× (1.1001100110011001100110011001100110011001100110011010)2 

在计算浮点数相加时，需要先进行 “对位”，将较小的指数化为较大的指数，并将小数部分相应右移：
> 0.1→ (−1)× 2× (0.11001100110011001100110011001100110011001100110011010)2<br />0.2→ (−1)× 2× (1.1001100110011001100110011001100110011001100110011010)2

最终，“0.1 + 0.2” 在计算机里的计算过程如下：<br />![](https://cdn.nlark.com/yuque/0/2020/png/524079/1608537711991-5e47ab8c-39f4-4c74-83cf-253b89927194.png#align=left&display=inline&height=236&margin=%5Bobject%20Object%5D&originHeight=350&originWidth=772&size=0&status=done&style=none&width=521)<br />经过上面的计算过程，0.1 + 0.2 得到的结果也可以表示为：
> (−1)× 2× (1.0011001100110011001100110011001100110011001100110100)2

然后，通过 JS 将这个二进制结果转化为十进制表示：
```javascript
(-1)**0 * 2**-2 * (0b10011001100110011001100110011001100110011001100110100 * 2**-52); //0.30000000000000004
console.log(0.1 + 0.2) ; // 0.30000000000000004
```
**精度损失可能出现在进制转化和对阶运算过程中**<br />
<br />这是一个典型的精度丢失案例，从上面的计算过程可以看出，0.1 和 0.2 在转换为二进制时就发生了一次精度丢失，而对于计算后的二进制又有一次精度丢失 。因此，得到的结果是不准确的。
<a name="uTNEu"></a>
#### 2.5 特殊数值
JavaScript 提供了几个特殊数值，用于判断数字的边界和其他特性 。如下所示：

- `Number.MAX_VALUE`：JavaScript 中的最大值
- `Number.MIN_VALUE`：JavaScript 中的最小值
- `Number.MAX_SAFE_INTEGER`：最大安全整数，为 2-1
- `Number.MIN_SAFE_INTEGER`：最小安全整数，为 -(2-1)
- `Number.POSITIVE_INFINITY`：对应 Infinity，代表正无穷
- `Number.NEGATIVE_INFINITY`：对应 -Infinity，代表负无穷
- `Number.EPSILON`：是一个极小的值，用于检测计算结果是否在误差范围内
- `Number.NaN`：表示非数字，NaN与任何值都不相等，包括NaN本身
- `Infinity`：表示无穷大，分 正无穷 Infinity 和 负无穷 -Infinity
<a name="gaoMu"></a>
#### 2.6 数值转换（类型转换）
有 3 个函数可以把非数值转换为数值，分别如下：
```javascript
Number(value)
parseInt(string [, radix])
parseFloat(string)
```
**Number() 可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。**<br />对于字符串而言，**Number() 只能对字符串进行整体转换**，而 `parseInt()` 和 `parseFloat()` **可以对字符串进行部分转换，即只转换第一个无效字符之前的字符**。<br />对于不同数据类型的转换，`Number()` 的处理也不尽相同，其转换规则如下:<br />【1】如果是 Boolean 值，true 和 false 将分别被转换为 1 和 0。 <br />【2】如果是数字值，只是简单的传入和返回。<br />【3】**如果是 null 值，返回 0**。<br />【4】**如果是 undefined，返回 NaN**。<br />【5】如果是字符串，遵循下列规则：

   - 如果字符串中只包含数字(包括前面带正号或负号的情况)，则将其转换为十进制数值; 
   - 如果字符串中包含有效的浮点格式，则将其转换为对应的浮点数值; 

![image.png](https://cdn.nlark.com/yuque/0/2020/png/524079/1608606283941-5db2b812-efc5-4a8c-8d26-4c9e8d91d2c5.png#align=left&display=inline&height=34&margin=%5Bobject%20Object%5D&name=image.png&originHeight=34&originWidth=326&size=2775&status=done&style=none&width=326)

   - 如果字符串中包含有效的十六进制格式，则将其转换为相同大小的十进制整数值; 
   - **如果字符串是空的(不包含任何字符)，则将其转换为 0**; 
   - 如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。

【6】如果是对象，则调用对象的 valueOf() 方法，然后依照前面的规则转换返回的值。如果转换的结果是 NaN，则调用对象的 toString() 方法，然后再次依照前面的规则转换返回的字符串值。<br />需要注意的是：
> **一元加操作符加号 “+” 和 Number() 具有同样的作用**。

在 ECMAScript 2015 规范中，为了实现全局模块化，Number 对象重写了 parseInt 和 parseFloat 方法，但和对应的全局方法并无区别。
```javascript
Number.parseInt === parseInt; // true
Number.parseFloat === parseFloat; // true
```
<a name="OOQwP"></a>
#### 2.7 位运算
位运算作用于最基本的层次上，即按内存中表示数值的位来操作数值。ECMAScript 中的数值以64位双精度浮点数存储，但位运算只能作用于整数，因此要先将 64 位的浮点数转换成 32 位的整数，然后再进行位运算，最后再将计算结果转换成64位浮点数存储。常见的位运算有以下几种：

- 按位非（NOT）：~ 
- 按位与（AND）：& 
- 按位或（OR）： |
- 按位异或（XOR）：^
- 左移：<<
- 有符号右移：>> 
- 无符号右移：>>>

需要注意的是：
> “有符号右移” 和 “无符号右移” 只在计算负数的情况下存在差异，>> 在符号位的右侧补0，不移动符号位；而 >>> 是在符号位的左侧补0，符号位发生移动和改变。

<a name="KIQ5v"></a>
#### 2.8 四舍五入
JavaScript 对数字进行四舍五入操作的 API 有 ceil，floor，round，toFixed，toPrecision 等，详细介绍请参考：[JavaScript 中的四舍五入](http://www.cnblogs.com/onepixel/p/5141566.html)
<a name="6o3vH"></a>
### **3、Boolean 类型**
<a name="c5Hep"></a>
#### boolean类型转换
Boolean 类型只有两个字面值：true 和 false 。 在 JavaScript 中，所有类型的值都可以转化为与 Boolean 等价的值 。转化规则如下：

-  所有对象都被当作 true
-  **空字符串被当作 false**
- ** null 和 undefined 被当作 false**
- ** 数字 0 和 NaN 被当作 false** 
```javascript
Boolean([]); //true
Boolean({}); //true
Boolean(undefined); //false
Boolean(null); //false
Boolean('');  //false
Boolean(0);   //false
Boolean(NaN); //false
```
除 Boolean() 方法可以返回布尔值外，以下 4 种类型的操作，也会返回布尔值。
<a name="gObtO"></a>
####  【1】关系操作符：>，>=，<，<=
当关系操作符的操作数使用了非数值时，要进行数据转换或完成某些奇怪的操作。

- 如果两个操作数都是数值，则执行数值比较。
- 如果**两个操作数都是字符串，则逐个比较两者对应的字符编码(charCode)，直到分出大小为止** 。
- 如果**操作数是其他基本类型，则调用Number() 将其转化为数值，然后进行比较**。
- **NaN 与任何值比较，均返回 false** 。
- 如果操作数是对象，则调用对象的 valueOf 方法（如果没有 valueOf ，就调用 toString 方法），最后用得到的结果，根据前面的规则执行比较。 
```javascript
'a' > 'b'; // false, 即 'a'.charCodeAt(0) > 'b'.charCodeAt(0)
2 > '1';  // true, 即 Number('1') = 1
true > 0; //true, 即 Number(true) = 1
undefined > 0; //false, Number(undefined) = NaN
null < 0; //false, Number(null) = NaN
new Date > 100; //true , 即 new Date().valueOf()
```
<a name="ChARN"></a>
#### ** 【2】相等操作符： **==，!=，===，!==
== 和 != 操作符都会先转换操作数，然后再比较它们的相等性。在转换不同的数据类型时，需要遵循下列基本规则：

- 如果**有一个操作数是布尔值，则在比较相等性之前，先调用 Number() 将其转换为数值**；
- 如果**一个操作数是字符串，另一个操作数是数值，在比较相等性之前，先调用 Number() 将字符串转换为数值**；
- 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；
- **null 和 undefined 是相等的。在比较相等性之前，不能将 null 和 undefined 转换成其他任何值**。
- 如果**有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true**；
- 如果**两个操作数都是对象，则比较它们的指针地址。如果都指向同一个对象，则相等操作符返回 true**；否则，返回 false。


<br />`===` 和` !==` 操作符最大的特点是，**在比较之前不转换操作数** 。它们的操作规则如下：

- ===： 类型相同，并且值相等，才返回 true ，否则返回 false 。
- !== ： 类型不同，或者值不相等，就返回 true，否则返回 false 。
```javascript
null === undefined; //false, 类型不同，直接返回 false
[] === []; //false ,类型相同，值不相同，指针地址不同
a=[],b=a,a===b; //true, 类型相同，值也相等
1 !== '1' ; // true , 值相等，但类型不同
[] !== [] ;  // true, 类型相同，但值不相等
```
<a name="g2nsO"></a>
####  【3】布尔操作符：!
布尔操作符属于一元操作符，即只有一个分项。其求值过程如下：

- 对分项求值，得到一个任意类型值；
- 使用 Boolean() 把该值转换为布尔值 true 或 false；
- 对布尔值取反，即 true 变 false，false 变 true
```javascript
!(2+3) ; // false
!(function(){}); //false
!([] && null && ''); //true
```
利用 ! 的取反的特点，使用 !! 可以很方便的将一个任意类型值转换为布尔值：
```javascript
console.log(!!0); //false
console.log(!!''); //false
console.log(!!(2+3)); //true
console.log(!!([] && null && '')); //false
```
需要注意的是：
> 逻辑与 “&&” 和 逻辑或 “||” 返回的不一定是布尔值，而是包含布尔值在内的任意类型值。 

如下所示：
```javascript
[] && 1; //1
null && undefined; //null
[] || 1; //[]
null || 1; //1
```
逻辑操作符属于短路操作符 。在进行计算之前，会先通过` Boolean()` 方法将两边的分项转换为布尔值，然后分别遵循下列规则进行计算：

- 逻辑与：**从左到右检测每一个分项，返回第一个布尔值为 false 的分项，并停止检测** 。如果没有检测到 false 项，则返回最后一个分项 。
- 逻辑或：**从左到右检测每一个分项，返回第一个布尔值为 true 的分项，并停止检测 **。如果没有检测到 true 项，则返回最后一个分项 。
```javascript
[] && {} &&  null && 1; //null
[] && {} &&  !null  &&  1 ; //1
null || undefined || 1 || 0; //1
undefined || 0 || function(){}; //function(){}
```
<a name="jUfYS"></a>
#### 【4】条件语句：if，while，?
条件语句通过计算表达式返回一个布尔值，然后再根据布尔值的真假，来执行对应的代码。其计算过程如下：

- 对表达式求值，得到一个任意类型值
- 使用 Boolean() 将得到的值转换为布尔值 true 或 false
```javascript
if(arr.length) { }
obj && obj.name ? 'obj.name' : ''
while(arr.length){ }
```
<a name="rljBa"></a>
### 4、Symbol 类型
Symbol 是 ES6 新增的一种原始数据类型，它的字面意思是：符号、标记。代表独一无二的值 。<br />在 ES6 之前，对象的属性名只能是字符串，这样会导致一个问题，当通过 mixin 模式为对象注入新属性的时候，就可能会和原来的属性名产生冲突 。而在 ES6 中，Symbol 类型也可以作为对象属性名，**凡是属性名是 Symbol 类型的，就都是独一无二的，可以保证不会与其他属性名产生冲突**。  <br />Symbol 值通过函数生成，如下所示：
```javascript
let s = Symbol(); //s是独一无二的值
typeof s ; // symbol　
```
和其他基本类型不同的是，**Symbol 作为基本类型，没有对应的包装类型，也就是说 Symbol 本身不是对象，而是一个函数。因此，在生成 Symbol 类型值的时候，不能使用 new 操作符** 。<br />
<br />Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 值的描述，当有多个 Symbol 值时，比较容易区分。
```javascript
var s1 = Symbol('s1');
var s2 = Symbol('s2');
console.log(s1,s2); // Symbol(s1) Symbol(s2)
```
注意，Symbol 函数的参数只是表示对当前 Symbol 值的描述，因此，**相同参数的 Symbol 函数的返回值也是不相等的**。　<br />用 Symbol 作为对象的属性名时，**不能直接通过点的方式访问属性和设置属性值。因为正常情况下，引擎会把点后面的属性名解析成字符串**。
```javascript
var s = Symbol();
var obj = {};
obj.s = 'Jack';
console.log(obj); // {s: "Jack"}
obj[s] = 'Jack';
console.log(obj) ; //{Symbol(): "Jack"}
```
Symbol 作为属性名，该属性不会出现在 `for...in`、`for...of` 循环中，也不会被` Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify() `返回。但是，**它也不是私有属性**，有一个 `Object.getOwnPropertySymbols() `方法，专门获取指定对象的所有 Symbol 属性名。 
```javascript
var obj = {};
var s1 = Symbol('s1');
var s2 = Symbol('s2')；
obj[s1] = 'Jack';
obj[s2] = 'Tom';
Object.keys(obj); //[]
for(var i in obj){ 
    console.log(i); //无输出 
}
Object.getOwnPropertySymbols(obj); //[Symbol(s1), Symbol(s2)]
```
另一个新的API，`Reflect.ownKeys` 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```javascript
var obj = {};
var s1 = Symbol('s1');
var s2 = Symbol('s2')；
obj[s1] = 'Jack';
obj[s2] = 'Tom';
obj.name = 'Nick';
Reflect.ownKeys(obj); //[Symbol(s1), Symbol(s2),"name"]
```
有时，我们希望**重新使用同一个 Symbol 值**，`Symbol.for` 方法可以做到这一点。**它接受一个字符串作为参数，然后全局搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值**。
```javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
s1 === s2 //true
```
`Symbol.for()` 也可以生成 `Symbol `值，它 和 `Symbol() `的区别是：

- **`Symbol.for() `首先会在全局环境中查找给定的 key 是否存在，如果存在就返回，否则就创建一个以 key 为标识的 Symbol 值**
- `Symbol.for() `生成的` Symbol `会**登记在全局环境中供搜索**，而 `Symbol()` 不会。

因此，**`Symbol.for()`  永远搜索不到 用 `Symbol() `产生的值。**
```javascript
var s = Symbol('foo');
var s1 = Symbol.for('foo');
s === s1; // false
```
`Symbol.keyFor()` 方法**返回一个已在全局环境中登记的 `Symbol` 类型值的 key **。<br />

```javascript
var s1 = Symbol.for('s1');
Symbol.keyFor(s1); //s1
var s2 = Symbol('s2'); //未登记的 Symbol 值
Symbol.keyFor(s2); //undefined　 
```
<a name="Q1jLB"></a>
### **5、Undefined 类型**
Undefined 是 Javascript 中特殊的原始数据类型，它只有一个值，即 undefined，字面意思是：未定义的值 。它的语义是，希望**表示一个变量最原始的状态，而非人为操作的结果 。** 这种原始状态会在以下 4 种场景中出现：
<a name="7L79Q"></a>
#### 【1】**声明了一个变量，但没有赋值**
```javascript
var foo;
console.log(foo); //undefined
```
访问 foo，返回了 undefined，表示这个变量自从声明了以后，就从来没有使用过，也没有定义过任何有效的值，即处于一种原始而不可用的状态。
<a name="J2KAk"></a>
#### 【2】**访问对象上不存在的属性**
```javascript
console.log(Object.foo); // undefined
var arr = [];
console.log(arr[0]); // undefined
```
访问 Object 对象上的 foo 属性，返回 undefined ， 表示Object 上不存在或者没有定义名为 foo 的属性。数组中的元素在内部也属于对象属性，访问下标就等于访问这个属性，返回 undefined ，就表示数组中不存在这个元素。
<a name="8E8Cn"></a>
#### 【3】函数定义了形参，但没有传递实参
```javascript
// 函数定义了形参 a
function fn(a) {
    console.log(a); //undefined
}
fn(); // 未传递实参
```
函数 fn 定义了形参 a， 但 fn 被调用时没有传递参数，因此，fn 运行时的参数 a 就是一个原始的、未被赋值的变量。
<a name="NF2cy"></a>
#### 【4】使用 void 对表达式求值
```javascript
void 0 ; // undefined
void false; // undefined
void []; // undefined
void null; // undefined
void function fn(){} ; // undefined
```
ECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined ，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。<br />
<br />因此，u**ndefined 一般都来自于某个表达式最原始的状态值，不是人为操作的结果**。当然，你也可以手动给一个变量赋值 undefined，但这样做没有意义，因为一个变量不赋值就是 undefined 。
<a name="rURKt"></a>
### **6、Null 类型**
Null 是 Javascript 中特殊的原始数据类型，它只有一个值，即 null，字面意思是：“空值”  。它的语义是，希望**表示一个对象被人为的重置为空对象，而非一个变量最原始的状态 。** 在内存里的表示就是，栈中的变量没有指向堆中的内存对象。当一个对象被赋值了 null 以后，原来的对象在内存中就处于游离状态，GC 会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为 null，即表示该对象已经被清空，目前无效状态。<br />null 是原始数据类型 Null 中的唯一一个值，但 typeof 会将 null 误判为 Object 类型 。 
```javascript
typeof null == 'object'  
```
在 JavaScript 中，数据类型在底层都是以二进制形式表示的，**二进制的前三位为 0 会被 typeof 判定为对象类型**，如下所示：

- 000 - 对象，数据是对象的应用
- 1 - 整型，数据是31位带符号整数
- 010 - 双精度类型，数据是双精度数字
- 100 - 字符串，数据是字符串
- 110 - 布尔类型，数据是布尔值

而 null 值的二进制表示全是 0 ，自然前三位当然也是 000，因此，typeof 会误以为是对象类型。如果想要知道 null 的真实数据类型，可以通过下面的方式来获取。
```javascript
Object.prototype.toString.call(null) ; // [object Null]
```
<a name="kxAjV"></a>
### 
