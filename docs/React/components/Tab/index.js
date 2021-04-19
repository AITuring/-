import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabName: 'Python', id: 0 },
        { tabName: 'JavaScript', id: 1 },
        { tabName: 'Java', id: 2 },
      ],
      currentIndex: 0,
    };
  }

  tabChoiced = id => {
    this.setState({
      currentIndex: id,
    });
  };

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default Tab;
