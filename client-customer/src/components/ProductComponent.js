import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    // console.log(this.state.products);
    const prods = this.state.products.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <div className='subImg'><Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} alt="" /></Link></div>
            <figcaption className=''>{item.name}</figcaption>
            <figcaption className=''>{item.price}đ</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div className="mainContent">
        <div className='products'>
          <h2 className="text-center">Danh sách sản phẩm</h2>
          <div className='align-center'>
            {prods}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() { // first: /product/...
    console.log(this.props.item);
    const params = this.props.params;
    if (params.cid && this.props.item === "category2") {
      this.apiGetProductsByCat2ID(params.cid);
    }
    else if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    }
    else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid && this.props.item === "category2") {
      this.apiGetProductsByCat2ID(params.cid);
    }
    else if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    }
    else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByCat2ID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);