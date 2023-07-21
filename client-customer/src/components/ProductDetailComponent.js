import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';

class ProductDetail extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className='mainContent'>
          <div className="proDetail">
            <div className='mau'></div>
            <figure className="detail">
              <div className='slider-master'>
                {/* <button className='btn' id='phai' onClick={() => this.btnChuyen()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                </svg></button>
                                <button className='btn' id='trai' onClick={() => this.btnChuyen()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                                </svg></button> */}
                <div className='slider-main'>
                  <div className='slide-item'><img src={"data:image/jpg;base64," + prod.image} alt="" /></div>
                  {/* <div className='slide-item'><img src="https://bidathanhson.vn/wp-content/uploads/2023/03/z4199181027742_c4b1e3e4baa56ff606cd793ab619963c.jpg" alt="" /></div>
                  <div className='slide-item'><img src={"data:image/jpg;base64," + prod.image} alt="" /></div>
                  <div className='slide-item'><img src="https://bidathanhson.vn/wp-content/uploads/2023/03/z4199181027742_c4b1e3e4baa56ff606cd793ab619963c.jpg" alt="" /></div> */}
                </div>
                {/* <div className='subimg'>
                                    <div className='item'><img src={"data:image/jpg;base64," + prod.image} alt="" /></div>
                                    <div className='item'><img src="https://bidathanhson.vn/wp-content/uploads/2023/03/z4199181027742_c4b1e3e4baa56ff606cd793ab619963c.jpg" alt="" /></div>
                                    <div className='item'><img src={"data:image/jpg;base64," + prod.image} alt="" /></div>
                                    <div className='item'><img src="https://bidathanhson.vn/wp-content/uploads/2023/03/z4199181027742_c4b1e3e4baa56ff606cd793ab619963c.jpg" alt="" /></div>
                                </div> */}
              </div>
              <figcaption>
                <h2>{prod.name}</h2>
                <h2>{prod.price}đ</h2>
                <div className='dathang'>
                  <input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} />
                  <input type="submit" value="Thêm vào giỏ hàng" onClick={(e) => this.btnAdd2CartClick(e)} />
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      );
    }
    return (<div />);
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) { // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else { // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert('OK BABY!');
    } else {
      alert('Please input quantity');
    }
  }
  // apis
  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
}
export default withRouter(ProductDetail);