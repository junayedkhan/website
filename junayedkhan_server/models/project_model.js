const mongoose = require("mongoose");
//
const project_schema = new mongoose.Schema({
    project_title:{
        type:String,
        default:""
    },
    project_img:{
        type:String,
        default:""
    },
    project_name:{
        type:String,
        default:""
    },
    project_description:{
        type:String,
        default:""
    },
    project_btn:{
        type:String,
        default:""
    },
}, {
    timestamps:true
})
//
const project_model = mongoose.model('project_model', project_schema);
//
module.exports = project_model