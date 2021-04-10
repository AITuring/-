# TypeScript简介

## 1.什么是TypeScript
TypeScript是JavaScript的超集，主要提供了类型系统和对ES6的支持。TypeScript增加了代码的可读性和可维护性。
## 2.安装TypeScript
直接使用**npm**安装即可
```bash
npm install -g typescript
```
执行以上命令之后会在全局环境安装`tsc`命令，安装之后用`tsc`编译`.ts`文件就转为`.js`文件：
```bash
tsc temp.js
```
例如下面是一个ts文件：
```typescript
class Point {
    x: number
    y: number
    constructor(x:number, y:number) {
        this.x = x
        this.y = y
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y )
    }
}

let p1 = new Point(0,10)
let p2 = new Point(10,20)
let p3 = p1.add(p2)
console.log(p3)
```
执行`tsc temp.js`之后就变成了：
```javascript
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);

```
从上面ts文件就能看出，ts和js明显的区别是ts变量后面指定了变量的类型，而js后面没有。这是因为**TypeScript只会在编译的时候对类型进行静态检查，如果发现有错误，编译时就会报错**。而在运行时，与普通的JavaScript文件一样，不会对类型进行检查。**即使TypeScript编译时出错，还是会生成编译结果**，依然可以使用编译之后的文件。<br />
<br />如果要在报错时终止js文件的生成，可以在`tsconfig.json`中配置`noEmitOnError`即可。
