const mongoose = require ("mongoose") 
const schema = mongoose.Schema
const deviceSchema = new schema ({
   DeiceBrand: {
    type: String,
    required: true, 
   },
   email: {
    type: String,
    required: true, 
    unique: true,
   },
   phone: Number,
})
module.exports = contact = mongoose.model("contact",contactSchema );
