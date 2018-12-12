var express = require('express');
var router = express.Router();

//MODELS
const Book = require('../models/Book.js');

/* GET users listing. */
router.get('/new', function(req, res, next) {
    const book = new Book({
        title: 'Burak',
        publicId: false,
        comments: [
            { message:'yorum1'},
            { message:'yorum2'}
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

router.get('/search',(req,res)=>{
    Book.find({ published:false },'comments',(err,data)=>{
        res.json(data);
    });
});

router.get('/searchone',(req,res)=>{
    Book.findOne({title:'Burak'},(err,data)=>{
        res.json(data);
    });
});


module.exports = router;
/**
 * Created by Kamera on 12.12.2018.
 */
