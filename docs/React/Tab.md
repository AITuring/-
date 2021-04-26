# Tab

`tab`其实还挺容易的，只不过昨天没想好。就是设置`activeIndex`，当`activeIndex === tab.index`时，说明就是该 tab 展示了。

完整代码如下：

```js
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick(val) {
    this.setState({
      activeIndex: val,
    });
  }

  render() {
    const { TabData } = this.props;
    let words = TabData.content[this.state.activeIndex];
    return (
      <div
        className="TabList steps"
        style={{ background: `url(${TabData.bg})` }}
      >
        <h1>{TabData.h1_title}</h1>
        <div className="tabs">
          {TabData.content.map(item => {
            return (
              <div
                className={[
                  'tab',
                  item.index === this.state.activeIndex ? 'tab-active' : '',
                ].join(' ')}
                key={item.index}
                onClick={() => this.handleClick(item.index)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="line"></div>
        <div className="tab-content">
          <div className="word">
            <div className="mini_title">{words.mini_title}</div>
            <div className="desc">{words.desc}</div>
            <div className="con">
              {words.con.map((item, index) => {
                return (
                  <div key={index} className="con-item">
                    <div className="circle"></div>
                    <div className="circle-item">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <img className="photo" src={words.photo} />
        </div>
      </div>
    );
  }
}
```

```jsx
import React from 'react';
import Carousel from './components/Carousel';
import Tab from './components/Tab';

import tabbg from './assets/tabbg.jpeg';
import tab2 from './assets/tab2.jpeg';
import tab3 from './assets/tab3.jpeg';
import tab4 from './assets/tab4.jpeg';

const TabData = {
  h1_title: '应用场景',
  bg: tabbg,
  content: [
    {
      title: '算法开发和模型训练',
      index: 0,
      photo: tab2,
      mini_title: '适用场景',
      desc:
        '算法开发和模型训练算法开发和模型训练算法开发和模型训练算法开发和模型训练',
      con: [
        '成熟 预置成熟的模型生产线，支持零代码开发。',
        '适配 国产化软硬件，保证技术的自主可控。',
        '自动学习 支持百度飞桨PaddlePaddle深度学习框架，自主可控，性能卓越。',
      ],
    },
    {
      title: '自动驾驶仿真测试',
      index: 1,
      photo: tab3,
      mini_title: '适用场景',
      desc: '自动驾驶仿真测试自动驾驶仿真测试自动驾驶仿真测试自动驾驶仿真测试',
      con: [
        '成熟 预置成熟的模型生产线，支持零代码开发。',
        '适配 国产化软硬件，保证技术的自主可控。',
        '自动学习 支持百度飞桨PaddlePaddle深度学习框架，自主可控，性能卓越。',
      ],
    },
    {
      title: 'Bug闭环',
      index: 2,
      photo: tab4,
      mini_title: '适用场景',
      desc: 'Bug闭环Bug闭环Bug闭环Bug闭环Bug闭环Bug闭环Bug闭环Bug闭环',
      con: [
        '成熟 预置成熟的模型生产线，支持零代码开发。',
        '适配 国产化软硬件，保证技术的自主可控。',
        '自动学习 支持百度飞桨PaddlePaddle深度学习框架，自主可控，性能卓越。',
      ],
    },
  ],
};

export default () => {
  return (
    <div>
      <Tab TabData={TabData} />
    </div>
  );
};
```
