import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import { Slider, Switch } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

class Slid extends Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled:{' '}
        <Switch
          size="small"
          checked={disabled}
          onChange={this.handleDisabledChange}
        />
      </>
    );
  }
}

export default Slid;
