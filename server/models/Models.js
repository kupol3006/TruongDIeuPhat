const mongoose = require('mongoose');
//schemas
const AdminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
}, { versionKey: false });

const CategorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
}, { versionKey: false });

const Category2Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    category: CategorySchema,
}, { versionKey: false });

const CustomerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    name: String,
    phone: String,
    email: String,
    active: Number,
    token: String,
}, { versionKey: false });

const ProductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    image: String,
    cdate: Number,
    category: Category2Schema
}, { versionKey: false });

const ItemSchema = mongoose.Schema({
    product: ProductSchema,
    quantity: Number
}, { versionKey: false, _id: false });

const OrderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cdate: Number,
    total: Number,
    status: String,
    customer: CustomerSchema,
    items: [ItemSchema]
}, { versionKey: false });

const Admin = mongoose.model('Admin', AdminSchema);
const Category = mongoose.model('Category', CategorySchema);
const Category2 = mongoose.model('Category2', Category2Schema);
const Customer = mongoose.model('Customer', CustomerSchema);
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);
module.exports = { Admin, Category, Category2, Customer, Product, Order };

