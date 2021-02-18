const mongoose = require("mongoose");
/////////////////////////////////////////////////////
const skills_head_schema = new mongoose.Schema({
    skills_title:{
        type:String
    },
    skills_designation:{
        type:String
    }
}, {
    timestamps:true
})

const skills_head_model = mongoose.model('skills_head_model', skills_head_schema)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const skills_create_schema = new mongoose.Schema({

        skills_percent:{
            type:String
        },
        skills_name:{
            type:String
        },
        skills_description:{
            type:String
        }

}, {
    timestamps:true
})
///////////////////////////////// skills model ////////////////////////////////////////////
const skills_create_model = mongoose.model('skills_model',skills_create_schema)
//////////////////////////////// skilss model exports ////////////////////////////////////
module.exports = { skills_create_model, skills_head_model}