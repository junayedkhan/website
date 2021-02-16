const mongoose = require('mongoose')
const contect_schema = new mongoose.Schema({
    contect_title:{
        type:String,
    },
    contect_name:{
        type:String,
    },
    contect_email:{
        type:String,
    },
    contect_massage:{
        type:String,
    }
})
const contect_model = mongoose.model('contect_model', contect_schema)
module.exports = contect_model
