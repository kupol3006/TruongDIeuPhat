import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class Category2Detail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtName: ''
    };
  }
  render() {
    return (
      <div className="float-right">
        <h2 className="text-center">CATEGORY2 DETAIL</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td><input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} readOnly={true} /></td>
              </tr>
              <tr>
                <td>Name</td>
                <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="ADD NEW" onClick={(e) => this.btnAddClick(e)} />
                  <input type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} />
                  <input type="submit" value="DELETE" onClick={(e) => this.btnDeleteClick(e)} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({ txtID: this.props.item._id, txtName: this.props.item.name });
    }
  }
  // event-handlers
  btnAddClick(e) {
    e.preventDefault();
    const name = this.state.txtName;
    const category = this.props.categories._id;
    if (name) {
      const cate = { name: name, category: category };
      this.apiPostCategory2(cate);
    } else {
      alert('Please input name');
    }
  }
  // apis
  apiPostCategory2(cate) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/admin/categories2', cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategory2(this.props.categories._id);
      } else {
        alert('SORRY BABY!');
      }
    });
  }
  apiGetCategory2() {
    const cid = this.props.categories._id;
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories2/category/' +cid, config).then((res) => {
      const result = res.data;
      this.props.updateCategory2(result);
    });
  }
  btnUpdateClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const name = this.state.txtName;
    if (id && name) {
      const cate = { name: name };
      this.apiPutCategory2(id, cate);
    } else {
      alert('Please input id and name');
    }
  }
  // apis
  apiPutCategory2(id, cate) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/admin/categories2/' + id, cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategory2();
      } else {
        alert('SORRY BABY!');
      }
    });
  }
  btnDeleteClick(e) {
    e.preventDefault();
    if (window.confirm('ARE YOU SURE?')) {
      const id = this.state.txtID;
      if (id) {
        this.apiDeleteCategory2(id);
      } else {
        alert('Please input id');
      }
    }
  }
  // apis
  apiDeleteCategory2(id) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.delete('/api/admin/categories2/' + id, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.apiGetCategory2();
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Category2Detail;