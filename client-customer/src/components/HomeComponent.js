import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <div className='subImg'><Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} alt="" /></Link></div>
            <figcaption className="">{item.name}</figcaption>
            <figcaption className="">{item.price.toLocaleString('vi-VN')}đ</figcaption>
          </figure>
        </div>
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <div className='subImg'><Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} alt="" /></Link></div>
            <figcaption className="">{item.name}</figcaption>
            <figcaption className="">{item.price.toLocaleString('vi-VN')}đ</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div className='mainContent'>
        <div className='banner'>
          <img src='https://bidathanhson.vn/wp-content/uploads/2023/03/banner-bi-da-thanh-son.jpg' alt="" />
          <div className='noidung'>
            <h1>XƯỞNG SẢN XUẤT BIDA VĂN LANG</h1>
            <div className='phu'>
              <h4> </h4>
              <h3>CƠ SỞ SẢN XUẤT BÀN BI DA VÀ PHỤ KIỆN BIDA LỚN NHẤT TẠI HỒ CHÍ MINH</h3>
            </div>
            <Link to=''>Về chúng tôi</Link>
          </div>
        </div>
        <div>
          <h2 className="text-center">Sản phẩm mới</h2>
          <div className="align-center">
            {newprods}
          </div>
        </div>
        {this.state.hotprods.length > 0 ?
          <div>
            <h2 className="text-center">Sản phẩm bán chạy</h2>
            <div className="align-center">
              {hotprods}
            </div>
          </div>
          : <div />}
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;