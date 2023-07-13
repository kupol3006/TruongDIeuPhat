require('../utils/MongooseUtil');
const Models = require('./Models');

const Category2DAO = {
  async selectAll() {
    const query = {};
    const categories_2 = await Models.Category2.find(query).exec();
    return categories_2;
  },
  async insert(category2) {
    const mongoose = require('mongoose');
    category2._id = new mongoose.Types.ObjectId();
    const result = await Models.Category2.create(category2);
    return result;
  },
  async update(category2) {
    const newvalues = { name: category2.name }
    const result = await Models.Category2.findByIdAndUpdate(category2._id, newvalues, { new: true });
    return result;
  },
  async delete(_id) {
    const result = await Models.Category2.findByIdAndRemove(_id);
    return result;
  },
  async selectByID(_id) {
    const category2 = await Models.Category2.findById(_id).exec();
    return category2;
  },
  async selectByCatID(_cid) {
    const query = { 'category._id': _cid };
    const categories2 = await Models.Category2.find(query).exec();
    return categories2;
  },
}
module.exports = Category2DAO;