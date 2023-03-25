const mongoose = require ("mongoose") 
const schema = mongoose.Schema
const Contact = require ("../models/Contact");
const deviceSchema = new schema ({
    deviceBrand: {
        type: String,
      required: true, 
      },
    deviceProblem: {
        type: String,
     required: true, 
      },
    deviceContact: {
        type: Contact,
       required: true, 
      },
    phone: Number,
 })
 module.exports = device = mongoose.model("device",contactSchema );