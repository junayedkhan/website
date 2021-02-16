const mongoose = require('mongoose');
//
const stats_schema = new mongoose.Schema({
      stats_1: {
        stats_icon: { type: String },
        stats_number: { type: String },
        stats_name: { type: String },
      },
      stats_2: {
        stats_icon: { type: String },
        stats_number: { type: String },
        stats_name: { type: String },
      },
      stats_2: {
        stats_icon: { type: String },
        stats_number: { type: String },
        stats_name: { type: String },
      },
      stats_4: {
        stats_icon: { type: String },
        stats_number: { type: String },
        stats_name: { type: String },
      },
}, {
    timestamps:true
})
//
const stats_model = mongoose.model('stats_model', stats_schema)
//
module.exports = stats_model