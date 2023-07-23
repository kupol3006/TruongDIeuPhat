import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    return (
      <div className="page">
        <h2 className="label">ĐĂNG KÝ</h2>
        <form>
          <table className="form">
            <tbody>
              <tr>
                {/* <td>Username</td> */}
                <td><input className="box" placeholder="Tên đăng nhập" type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
              </tr>
              <tr>
                {/* <td>Password</td> */}
                <td><input className="box" placeholder="Mật khẩu" type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
              </tr>
              <tr>
                {/* <td>Name</td> */}
                <td><input className="box" placeholder="Tên" type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
              </tr>
              <tr>
                {/* <td>Phone</td> */}
                <td><input className="box" placeholder="Số điện thoại" type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></td>
              </tr>
              <tr>
                {/* <td>Email</td> */}
                <td><input className="box" placeholder="Email" type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input className="submit-all" type="submit" value="ĐĂNG KÝ" onClick={(e) => this.btnSignupClick(e)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('VUI LÒNG NHẬP TÊN TÀI KHOẢN, MẬT KHẨU, TÊN, SỐ ĐIỆN THOẠI VÀ EMAIL!');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;
