import React from 'react';
import './style.css';

class Hover extends React.Component {
  render() {
    const { ProductData } = this.props;
    return (
      <div className="Products">
        <h1>{ProductData.h1_title}</h1>
        <div className="product-zone">
          {ProductData.products.map((item, index) => {
            return (
              <div className="product-card" key={index}>
                <div className="product-body">
                  <div
                    className="product-image"
                    style={{ background: `url(${item.bg})` }}
                  ></div>
                  <div className="product-content">
                    <img className="content-icon" src={item.icon} />
                    <div className="content-title">{item.title}</div>
                  </div>
                  <div className="content-desc">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Hover;
