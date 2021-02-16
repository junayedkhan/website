const mongoose = require('mongoose');
//
const about_schema = new mongoose.Schema({
    about_title:{
        type:String,
        default:""
    },
    about_photo:{
        type:String,
        default:""
    },
    about_designation:{
        type:String,
        default:""
    },
    about_description:{
        type:String,
        default:""
    },
    about_name:{
        type:String,
        default:""
    },
    about_email:{
        type:String,
        default:""
    },
    about_phone_number:{
        type:String,
        default:""
    },
    about_date_of_birth:{
        type:String,
        default:""
    },
    about_nationality:{
        type:String,
        default:""
    },
    about_address:{
        type:String,
        default:""
    },
    about_btn_1:{
        type:String,
        default:""
    },
    about_btn_2:{
        type:String,
        default:""
    },
}, {
    timestamps:true
})
//
const about_model = mongoose.model('about_model', about_schema)
//
module.exports = about_model;