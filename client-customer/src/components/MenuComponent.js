import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import Inform from './InformComponent';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categories2: [],
      txtKeyword: ''
    };
  }

  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id}><Link to={'/product/category/' + item._id} item="">{item.name}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg></Link>
          <ul class="subnav">
            {this.state.categories2.map((item2) => {
              if (item._id === item2.category._id) {
                return (
                  <li key={item2._id}><Link to={'/product/category2/' + item2._id}>{item2.name}</Link></li>
                )
              }
            })}
          </ul>
        </li>
      );
    });
    const cates1 = this.state.categories.map((item) => {
      return (
        <li key={item._id}><Link to={'/product/category/' + item._id} item="">{item.name}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg></Link>
          <ul class="subnav1">
            {this.state.categories2.map((item2) => {
              if (item._id === item2.category._id) {
                return (
                  <li key={item2._id}><Link to={'/product/category2/' + item2._id}>{item2.name}</Link></li>
                )
              }
            })}
          </ul>
        </li>
      );
    });
    return (
      <div className='menu'>
        <div className='bot1'>
          <div className="botMenu2">
            <nav className='container2'>
              <ul id="bot-menu2">
                {cates1}
              </ul>
            </nav>
            <Inform />
          </div>
        </div>
        <div className='midMenu' id='midMenu'>
          <Link to='/'><img src='/logoVL_blue.jpg' alt="" /></Link>
          <div className="hotLine">
            <p>HOTLINE</p>
            <p>0903 160 860</p>
          </div>
          <div className="emailSupport">
            <p>EMAIL SUPPORT</p>
            <p>thanhson.club@gmail.com</p>
          </div>
          <div className="ok">
            <form className="search">
              <input type="text" placeholder="Bạn có thể tìm kiếm sản phẩm bạn mong muốn?" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
              <button className="submit" type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg></button>
            </form>
          </div>
        </div>
        <div className='bot'>
          <div className="botMenu">
            <nav className='container' style={{ left: '-100%' }}>
              <ul id="bot-menu">
                <li className='li1'><div className="ok1">
                  <form className="search1">
                    <input type="text" placeholder="Tìm kiếm sản phẩm" className="keyword1" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
                    <button className="submit1" type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)}><svg className='find' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                  </form>
                </div></li>
                {cates}
              </ul>
            </nav>
            <div className='icon' onClick={() => this.btnSubMenu()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg style={{ opacity: '0' }} xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div className='Home'><Link to='/'><img src='/logoVL_blue.jpg' alt="" /></Link></div>
            <div className='layer' onClick={() => this.btnSubMenu()}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></div>
            <Inform />
          </div>
        </div>
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
    this.apiGetCategories2();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  handleScroll = (e) => {
    const bot1 = document.querySelector('.bot1');
    const x = window.innerWidth;
    if (e.srcElement.scrollingElement.scrollTop >= 101 && x > 1024) {
      if (bot1) {
        bot1.style.display = 'block';
      }
    }
    else {
      if (bot1) {
        bot1.style.display = 'none';
      }
    }
  }
  handleResize = (e) => {
    const bot1 = document.querySelector('.bot1');
    const layer = document.querySelector('.layer');
    const container = document.querySelector('.container');
    const x = window.innerWidth;
    if (x > 1024) {
      if (bot1) {
        bot1.style.display = 'none';
      }
      layer.style.display = 'none';
      container.style.left = '-100%';
    }
    else {
      if (bot1) {
        bot1.style.display = 'none';
      }
    }
  }
  btnSubMenu() {
    const container = document.querySelector('.container');
    // const containerStyle = getComputedStyle(container);
    const layer = document.querySelector('.layer');
    const layerStyle = getComputedStyle(layer);
    if (container.style.left === '-100%') {
      container.style.left = '0';
      container.style.transition = '0.8s';
      layer.style.display = 'block';
    }
    else if (layerStyle.display === 'block') {
      container.style.left = '-100%';
      container.style.transition = '1.5s';
      layer.style.display = 'none';
    }
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  apiGetCategories2() {
    axios.get('/api/customer/categories2').then((res) => {
      const result = res.data;
      this.setState({ categories2: result });
    });
  }
}
export default withRouter(Menu);