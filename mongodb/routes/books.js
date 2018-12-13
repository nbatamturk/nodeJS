var express = require('express');
var router = express.Router();

//MODELS
const Book = require('../models/Book.js');

/* GET users listing. */
router.get('/new', function(req, res, next) {
    const book = new Book({
        title: 'Burak2',
        publicId: true,
        comments: [
            { message:'yorum3'},
            { message:'yorum4'}
            ],
        meta:{
            votes:42,
            favs:30
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

router.get('/searchbyid',(req,res)=>{
    Book.findById("5c11fcaefa85af168056a1cc",(err,data)=>{
       res.json(data);
    });
});

    router.get('/update',(req,res)=>{
        Book.update({
            published: false
            },
            {
            published:true , title:"deneme"
            },
            {
            upsert:true
            //multi:true
            },(err,data)=>{
            res.json(data);
        });
    });

    router.get('/updatebyid',(req,res)=>{
        Book.findByIdAndUpdate(
                '5c11fcaefa85af168056a1cc'
            ,
            {
                published:true,
                title:"Deneme id ile güncelleme",
                'meta.favs':150
            },
            (err,data)=>{
                res.json(data);
            });
    });

    router.get('/remove',(req,res)=>{
        Book.findById("5c11fcb5fa85af168056a1cf",(err,book)=>{
            book.remove((err,data)=>{
                res.json(data);
            });
        });
    });

module.exports = router;
/**
 * Created by Kamera on 12.12.2018.
 */
