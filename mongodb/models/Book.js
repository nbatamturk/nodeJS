/**
 * Created by Kamera on 12.12.2018.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    comments: [{message:String}],
    meta:{
        votes: Number,
        favs: Number
    },
    published: {
        type: Boolean,
        default:false,
        unique:true
    },
    publishedAt:{
        type: Date,
        default: Date.now(),
        unique:true
    }
});

module.exports = mongoose.model('book',BookSchema);