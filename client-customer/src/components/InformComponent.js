import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="information">
        <div className='main-inform'>
          <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
            {this.context.token === '' ?
              <ul className='subInfor'>
                <li><Link to='/login'>Đăng nhập</Link></li>
                <li><Link to='/signup'>Đăng ký</Link></li>
                <li><Link to='/active'>Xác nhận</Link></li>
              </ul>
              :
              <ul className='subInfor'>
                <li><Link style={{ color: 'gray', marginLeft: 0 }} onClick={() => this.btnDrop()}>{this.context.customer.name}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg></Link>
                  <ul className='ssInfor'>
                    <li><Link to='/myprofile'>Hồ sơ</Link></li>
                    <li><Link to='/myorders'>Đơn hàng</Link></li>
                  </ul>
                </li>
                <li><Link to='/home' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link></li>
              </ul>
            }</Link>
        </div>
        <div className='subInfor2'>
          <Link to='/mycart'><svg className='drop' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg></Link>
          <h5>{this.context.mycart.length}</h5>
        </div>
      </div >
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
  btnDrop() {
    const element = document.querySelector('.ssInfor');
    const computedStyle = getComputedStyle(element);
    const svg = document.querySelector('.subInfor li svg');
    if (computedStyle.display === 'none') {
      element.style.display = 'block';
      svg.style.transform = 'rotate(180deg)';
    } else {
      element.style.display = 'none';
      svg.style.transform = 'rotate(0deg)';
    }
  }
}
export default Inform;
