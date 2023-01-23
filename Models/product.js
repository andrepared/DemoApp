const mongoose = require('mongoose'); 
const { Schema } = mongoose;
//Create schema 

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true, 
        min: 0,
    },
    category: {
        type: String, 
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy'],
        required: true
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
})
//Need to compile our model
const Product = mongoose.model('Product', productSchema);


//Now could import this model and use it somewhere else 
module.exports = Product;

