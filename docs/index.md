---
gapless: true
---
<code src="./Home/index.jsx" inline/>
<!-- ---
hero:
  title: 辽🚩
  desc: 按国号，“辽”乃“镔铁”之意。化学式为Fe，展开即是Front End
  # actions:
  #   - text: 🏴
  #     link: /components
features:
  - icon: https://img.icons8.com/color/48/000000/javascript.png
    title: JavaScript
    # desc: Balabala
  - icon: https://img.icons8.com/color/48/000000/typescript.png
    title: TypeScript
    # desc: Balabala
  - icon: https://img.icons8.com/color/48/000000/vue-js.png
    title: Vue
    # desc: Balabala
  - icon: https://img.icons8.com/color/48/000000/react-native.png
    title: React
    # desc: Balabala
  - icon: https://img.icons8.com/color/48/000000/nodejs.png
    title: NodeJs
    # desc: Balabala
  - icon: https://img.icons8.com/color/48/000000/chrome--v3.png
    title: Chrome
    # desc: Balabala

<!-- footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## Hello myblog!

```jsx
import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message, Alert } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
```

```jsx
import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
    </ConfigProvider>
  );
}; -->

<!-- export default App;
```

```jsx
/**
* inline: true
*/
import React, { useState } from 'react';
import { render } from 'react-dom';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

const App = () =>(
  <Typography>
    <Title>介绍</Title>
    <Paragraph>
      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </Paragraph>
    <Paragraph>
      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
      Ant Design。基于<Text mark>『确定』和『自然』</Text>
      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
      <Text strong>更好的用户体验</Text>。
    </Paragraph>
    <Title level={2}>设计资源</Title>
    <Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
      <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity-cn">设计原则</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview-cn">设计模式</Link>
        </li>
        <li>
          <Link href="/docs/resources-cn">设计资源</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      <blockquote>{blockContent}</blockquote>
      <pre>{blockContent}</pre>
    </Paragraph>

  </Typography>
)

export default App;
``` --> 
