import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className="page">
        <h2 className="label">XÁC THỰC TÀI KHOẢN</h2>
        <form>
          <table className="form">
            <tbody>
              <tr>
                {/* <td>ID</td> */}
                <td><input className="box" placeholder="ID" type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} /></td>
              </tr>
              <tr>
                {/* <td>Token</td> */}
                <td><input className="box" placeholder="TOKEN" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input className="submit-all" type="submit" value="XÁC THỰC" onClick={(e) => this.btnActiveClick(e)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('VUI LÒNG NHẬP ID VÀ TOKEN!');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('THÀNH CÔNG!');
      } else {
        alert('THẤT BẠI!');
      }
    });
  }
}
export default Active;
