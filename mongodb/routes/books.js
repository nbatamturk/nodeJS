var express = require('express');
var router = express.Router();

//MODELS
const Book = require('../models/Book.js');

/* GET users listing. */
router.get('/new', function(req, res, next) {
    const book = new Book({
        title: 'Elon Musk',
        publicId: false,
        comments: [
            { message:'Harika bir kitap'},
            { message:'Kitap Fena değil okunur'}
            ],
        meta:{
            votes:12,
            favs:50
        }

    });

    book.save((err,data)=>{
        if(err)
            console.log(err);
        else
            res.json(data);
    });

    //res.send('respond with a resource');
});

module.exports = router;
/**
 * Created by Kamera on 12.12.2018.
 */
