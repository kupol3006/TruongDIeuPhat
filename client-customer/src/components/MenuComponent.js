import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className='menu'>
        <div className="border-bottom">
          <div className="float-left">
            <ul className="menu">
              <li className="menu"><Link to='/'>Trang chủ</Link></li>
              {cates}
            </ul>
          </div>
        </div>
        <div className='midMenu'>
          <div class="hotLine">
            <p>HOTLINE</p>
            <p>0903 160 860</p>
          </div>
          <div class="emailSupport">
            <p>EMAIL SUPPORT</p>
            <p>thanhson.club@gmail.com</p>
          </div>
          <div className="float-right">
            <form className="search">
              <input type="search" placeholder="Bạn có thể tìm kiếm sản phẩm bạn mong muốn?" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
              <input className="submit" type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
            </form>
          </div>
        </div>
        <div class="botMenu">
          <nav className='container'>
            <ul id="bot-menu">
              <li><a a href="">Bàn Bida <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg> </a>
                <ul class="subnav">
                  <li><a href="">Bàn Bida cũ</a></li>
                  <li><a href="">Bàn Bida mới</a></li>
                </ul>
              </li>
              <li><a a href="">Bi Bida <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></a>
                <ul class="subnav">
                  <li><a href="">Bi lỗ</a></li>
                  <li><a href="">Bi France</a></li>
                </ul>
              </li>
              <li><a a href="">Cơ Bida <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></a>
                <ul class="subnav">
                  <li><a href="">Cơ 3 băng</a></li>
                  <li><a href="">Cơ líp</a></li>
                  <li><a href="">Cơ lỗ</a></li>
                </ul>
              </li>
              <li><a a href="">Đầu Cơ <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></a>
                <ul class="subnav">
                  <li><a href="">Đầu cơ ngoại</a></li>
                  <li><a href="">Đầu cơ Việt Nam</a></li>
                </ul>
              </li>
              <li><a a href="">Túi đựng cơ</a></li>
            </ul>
          </nav>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);