# 轮播图 Carousel

## 思路

思路其实很简单，就是用`ul`列出传入的图片，然后用一个计数器迭代`showIndex`的值，如果图片的`index`和`showIndex`一致，图片就显示。上一张、下一张以及点击图片下的圆点显示对应照片也是这个原理。

## 简单实现

要实现一个轮播，需要：

- `showIndex` 当前显示图片`index`
- `timer`计时器

### 创建 Carousel 类

```js
import React, { Component } from 'react';
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        'http://image-aituring.test.upcdn.net/me.JPG',
        'https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg',
        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      ], // 图片数组
      showIndex: 0, //显示第几个图片
      timer: null, // 定时器
      show: false, // 前后按钮显示
    };
  }
}

export default Carousel;
```

### 关键函数

#### `start`

设置定时器 ⏲，更新`timer`

```js
start = () => {
  //开始
  let { timer } = this.state;
  timer = setInterval(() => {
    this.next();
  }, 2000);
  this.setState({
    timer,
  });
};
```

#### `stop`

停止计时器计数

```js
stop = () => {
  //暂停
  let { timer } = this.state;
  clearInterval(timer);
};
```

#### `change`

点击改变当前轮播的 index

```js
change = index => {
  //点击下面的按钮切换当前显示的图片
  let { showIndex } = this.state;
  showIndex = index;
  this.setState({
    showIndex,
  });
};
```

#### `previous`

点击跳转前一张图片

```js
previous = e => {
  //上一张
  let ev = e || window.event;
  let { showIndex, imgs } = this.state;
  if (showIndex <= 0) {
    showIndex = imgs.length - 1;
  } else {
    showIndex--;
  }
  this.setState({
    showIndex,
  });
};
```

#### `next`

点击跳转下一张图片

```js
next = (e) => { //下一张
    let ev = e || window.event;
    let {showIndex, imgs} = this.state;
    if(showIndex >= imgs.length - 1){
        showIndex = 0;
    }else{
        showIndex ++;
    }
    this.setState({
        showIndex
    }
}
```

有了这些函数，基本流程也就完成了。还有就是在轮播图挂载到 DOM 开始计数，销毁时取消计时器。

```js
componentDidMount(){ //一开始自动播放
    this.start();
}
componentWillUnmount() { //销毁前清除定时器
    this.stop();
}
```

以上就是一个简单的 react 轮播图。

## 结果

```jsx
import React from 'react';
import Slid from './Slid';
import Carousel from './components/Carousel';

export default () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};
```
