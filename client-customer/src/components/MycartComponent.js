import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';

class Mycart extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    const mycart = this.context.mycart.map((item, index) => {
      return (
        <tr key={item.product._id} className="table-result">
          <td>{index + 1}</td>
          <td>{item.product._id}</td>
          <td>{item.product.name}</td>
          <td>{item.product.category.name}</td>
          <td><img src={"data:image/jpg;base64," + item.product.image} width="70px" height="70px" alt="" /></td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{item.product.price * item.quantity}</td>
          <td><span className="link" onClick={() => this.lnkRemoveClick(item.product._id)}>XÓA</span></td>

        </tr>
      );
    });
    return (
      <div className="page">
        <h2 className="label">DANH SÁCH MẶT HÀNG</h2>
        <table className="table" border="1">
          <tr className="table-database">
            <th>No.</th>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
            <th>Trạng thái</th>
          </tr>
          {mycart}
          <tr className="table-result">
            {/* <td colSpan="6"></td> */}
            <td></td>
            <td>Total</td>
            <td>{CartUtil.getTotal(this.context.mycart)}</td>
            <td><span className="link" onClick={() => this.lnkCheckoutClick()}>THANH TOÁN</span></td>
          </tr>
        </table>
      </div>
    );
  }
  // event-handlers
  lnkRemoveClick(id) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex(x => x.product._id === id);
    if (index !== -1) { // found, remove item
      mycart.splice(index, 1);
      this.context.setMycart(mycart);
    }
  }
  lnkCheckoutClick() {
    if (window.confirm('XÁC NHẬN THỰC HIỆN THANH TOÁN?')) {
      if (this.context.mycart.length > 0) {
        const total = CartUtil.getTotal(this.context.mycart);
        const items = this.context.mycart;
        const customer = this.context.customer;
        if (customer) {
          this.apiCheckout(total, items, customer);
        } else {
          this.props.navigate('/login');
        }
      } else {
        alert('GIỎ HÀNG ĐANG RỖNG!');
      }
    }
  }
  // apis
  apiCheckout(total, items, customer) {
    const body = { total: total, items: items, customer: customer };
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/customer/checkout', body, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('THÀNH CÔNG!');
        this.context.setMycart([]);
        this.props.navigate('/home');
      } else {
        alert('THẤT BẠI!');
      }
    });
  }
}
export default withRouter(Mycart);
