const mongoose = require('mongoose');
//
const utility_schema = new mongoose.Schema({
    logo:{
        type:String,
        default:""
    },
    baner_name:{
        type:String,
        default:""
    },
    baner_designation:{
        type:String,
        default:""
    },
    baner_button:{
        type:String,
        default:""
    },
    upload_baner_photo:{
        type:String,
        default:""
    },
    facebook:{
        type:String,
        default:""
    },
    twitter:{
        type:String,
        default:""
    },
    instagram:{
        type:String,
        default:""
    },
    youtube:{
        type:String,
        default:""
    },
    footer_name:{
        type:String,
        default:""
    }
    
},{
    timestamps:true
})
//
const utility_model = mongoose.model('utility_model', utility_schema);
//
module.exports = utility_model;