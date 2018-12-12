/**
 * Created by Kamera on 12.12.2018.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    publicId: Boolean,
    comments: [{message:String}],
    meta:{
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model('book',BookSchema);