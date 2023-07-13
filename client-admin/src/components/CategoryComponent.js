import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CategoryDetail from './CategoryDetailComponent';
import Category2Detail from './Category2DetailComponent';

class Category extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      itemSelected: null,
      category2: [],
      item2Selected: null,
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
          <td>{item._id}</td>
          <td>{item.name}</td>
        </tr>
      );
    });
    const cates2 = this.state.category2.map((item)=>{
      return (
        <tr key={item._id} className="datatable" onClick={() => this.trCategory2Click(item)}>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.category.name}</td>
        </tr>
      );
    });
    return (
      <div>
        <div className="float-left">
          <h2 className="text-center">CATEGORY LIST</h2>
          <table className="datatable" border="1">
            <tbody>
              <tr className="datatable">
                <th>ID</th>
                <th>Name</th>
              </tr>
              {cates}
            </tbody>
          </table>
        </div>
        <div className="inline" />
        <CategoryDetail item={this.state.itemSelected} updateCategories={this.updateCategories} />
        <div className="float-clear" />
        {this.state.category2.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">CATEGORY2 LIST</h2>
            <table className="datatable" border="1">
              <tbody>
                <tr className="datatable">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                </tr>
                {cates2}
              </tbody>
            </table>
            <div className="float-left" />
            <Category2Detail item={this.state.item2Selected} updateCategory2={this.updateCategory2}  categories={this.state.itemSelected}/>
            <div className="float-clear" />
          </div>
          : <div />}
          
      </div>

    );
}
  updateCategories = (categories) => { // arrow-function
    this.setState({ categories: categories });
  }
  updateCategory2 = (category2)=>{
    this.setState({category2: category2})
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ itemSelected: item, category2: [], item2Selected: null });
    this.apiGetCategory2(item._id);
  }
  trCategory2Click(item){
    this.setState({item2Selected:item});
  }
  // apis
  apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories', config).then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  apiGetCategory2(cid){
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories2/category/' + cid, config).then((res) => {
      const result = res.data;
      this.setState({ category2: result });
      console.log(result);
    });
  }
}
export default Category;