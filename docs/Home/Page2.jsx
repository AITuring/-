import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  width: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  margin: '0 auto'
};

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Let’s <span>Pro</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              命令行运行下列命令，快速启动开发服务：
            </p>
            <div key="code1" className="home-code">
              <div>
                $ <span>git clone</span> git@github.com:ant-design/ant-design-pro.git --depth=1
              </div>
              <div>$ cd ant-design-pro</div>
              <div>$ npm install</div>
              <div>
                $ npm start
                <span className="home-code-comment">
                  // 打开浏览器访问 http://localhost:8000
                </span>
              </div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
      <Carousel autoPlay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Page2;
