//server.js

//establecer
var express = require('express');
var app = express();
var path = require('path');

var nodemailer = require('nodemailer');
var fs = require('fs');

   

 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

var smtpTransport = nodemailer.createTransport('smtps://ladoservidor2016%40gmail.com:ladosrv2016@smtp.gmail.com');


function sendEmail(text){

    var mailOptions={
        from: '"usuario" <ladoservidor2016@gmail.com>',
        to : 'kmelisu@gmail.com',//correo al que llega
        subject : 'usuario',
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});

}



// routes ==============================================================
 app.get('/send',function(req,res){

    sendEmail(req.body);    
  
});


  



    // applicacion-------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // carga la vista index 
    });




   

app.listen(8080);
console.log("App lista en el puerto 8080");
