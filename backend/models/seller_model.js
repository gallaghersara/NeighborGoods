const mongoose = require('mongoose');

//Products Schema
const sellerSchema = mongoose.Schema({
    category: { type: String },
    subcategory: { type: String },
    sellerName: {
         fn: String,
         ln: String
        },
    gender: { type: Boolean },
    image: { type: String },
    Description: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    links: {
        facebook: String,
        website: String,
        instegram: String
    }


})


let Seller = module.exports = mongoose.model('sellers', sellerSchema)

//Get Items
module.exports.getSellers = (callback, limit) => {
    Seller.find(callback).limit(limit)
}