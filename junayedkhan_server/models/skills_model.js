const mongoose = require("mongoose");
//
const skills_schema = new mongoose.Schema({
    skills_title:{
        type:String
    },
    skills_description:{
        type:String
    },
    first_skills:{
        skills_percent:{
            type:String
        },
        skills_name:{
            type:String
        },
        skills_description:{
            type:String
        }
    },
    second_skills:{
        skills_percent:{
            type:String
        },
        skills_name:{
            type:String
        },
        skills_description:{
            type:String
        }
    },
    third_skills:{
        skills_percent:{
            type:String
        },
        skills_name:{
            type:String
        },
        skills_description:{
            type:String
        }
    },
    fourth_skills:{
        skills_percent:{
            type:String
        },
        skills_name:{
            type:String
        },
        skills_description:{
            type:String
        }
    },
    
}, {
    timestamps:true
})
//
const skills_model = mongoose.model('skills_model',skills_schema)
//
module.exports = skills_model