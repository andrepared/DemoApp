const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema bc we'll be using that Schema type Object ID 

const portfolioSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'portfolio must have a name!']
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required'] 
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})




const portfolio = mongoose.model('Portfolio', portfolioSchema);
 
module.exports = portfolio;
