const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String,
        required:true
    },
    skillDomain:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    created_by: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    }
})

const Resource = mongoose.model('resources', ResourceSchema);
 
module.exports = Resource;