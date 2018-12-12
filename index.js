/*
const fs = require('fs');

fs.readFile('test.txt',(error,data) => {
    if(error)
    console.log(error);

  console.log(data.toString());
  console.log("Dosya okundu");
});


const test = fs.readFileSync('test.txt');
console.log(test.toString());
console.log("Hız");


fs.writeFile("test.txt",'Merhaba dünya Deneme ! \nnaber ',(err) => {
    if(err)
        throw err;
    console.log("Dosya eklendi")
});



fs.unlink("test2.txt",(err) =>{
    if(err)
        throw err;

    console.log("Dosya Silindi !");
});



const http = require('http');
const fs = require('fs');

const server = http.createServer((request , response) => {
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'})
    fs.readFile("index.html",(err,data) =>{
       if(err)
        throw err;

        response.end(data);

    });

});

server.listen(3000);




const http = require('http');

const server = http.createServer((request , response) => {
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});

    if(request.method === "GET")
        if(request.url === "/")
        response.write("Anasayfadasınız");
        else if(request.url === "/iletisim")
        response.write("iletişim sayfasındasınız");
        else
        response.write("bu sayfa bulunamadı");


    response.end();

});

server.listen(3000);

//nodemon ile çalıştır



const fs = require('fs');
const file = 'video2.mp4';

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');

let progress = 0;

fs.stat(file,(err,data) => {
    const total = data.size;
    //console.log(total);


readStream.on('data', (chunk) =>{
    progress += chunk.length;
    console.log(Math.round((100 * progress) / total) + '%');
});

    readStream.pipe(writeStream);
    writeStream.on('finish' , () => {
       console.log("Yeni dosya oluşturuldu.");
    });

/*
readStream.on('end',()=>{
   console.log("Veri okuması bitti");
    //console.log(progress);
});


});

const http = require("http");
const fs = require("fs");

const server = http.createServer((request , response)=>{
    console.log("Bir istekte bulunuldu");

    response.writeHead(200, { 'content-type': 'text/html; charset=utf8'});
    fs.readFile ('index.html', (err,data)=> {
        if (err)
            throw err;

        response.end(data);
    });
});

server.listen(3000);

 */

    const express = require('express');
    const app = express();

    app.set('view engine','pug');


    app.get('/',(req, res)=>{
        res.render('index.pug',{name:'Burak',age:23});
    });

    app.get('/home',(req, res)=>{
        res.render('home.pug');
    });

    app.get('/contact',(req, res)=>{
        res.render('contact.pug');
    });

    app.listen(3000,()=>{
        console.log("Express Server Çalıştı");
    });










