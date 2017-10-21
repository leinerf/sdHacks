var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.set('views','./views');

// css folder setup
app.use(express.static(__dirname + '/public'));
// console.log(__dirname + '/public');


app.get('/',function(req,res){
    res.render('index');
})

app.listen(3000,function(){
    console.log('listening at port 3000')
})