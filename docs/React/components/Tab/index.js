/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';

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

export default Tab;
