const express = require('express');
const body_parser = require('body-parser');
const mongodb = require('mongodb');
const path = require('path');

const PORT = 7000;
const app = express();
app.set('view engine','ejs');

app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);


const mongo_client = mongodb.MongoClient;
    let db_handler;
    const DB_URL = 'mongodb://localhost:27017';

    mongo_client.connect(DB_URL, (err, db_client) => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Let's Learn!");
        db_handler = db_client.db("");
        }
    });

})    

app.get('/', (req, res) => {
        res.render("index"); 
});

app.get('/about', (req, res) => {
    res.render('navigation/about');
});

app.get('/contact', (req, res) => {
    res.render('navigation/contact');
});

app.post('/submitcontact', (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('navigation/login');
});

app.get('/javascript', (req, res) => {
    res.render('javascript/javascript');
});



app.get('/beginnerHTML', (req, res) => {
    res.render('beginner/beginnerHTML');
});

app.get('/10minsbeginner', (req, res) => {
    res.render('beginner/10minsbeginner');
});

app.get('/20minsbeginner', (req, res) => {
    res.render('beginner/20minsbeginner');
});

app.get('/30minsbeginner', (req, res) => {
    res.render('beginner/30minsbeginner');
});

app.get('/intermediateHTML', (req, res) => {
    res.render('intermediate/intermediateHTML');
});

app.get('/10minsintermediate', (req, res) => {
    res.render('intermediate/10minsintermediate');
});

app.get('/20minsintermediate', (req, res) => {
    res.render('intermediate/20minsintermediate');
});

app.get('/30minsintermediate', (req, res) => {
    res.render('intermediate/30minsintermediate');
});

app.get('/advancedHTML', (req, res) =>{
    res.render('advanced/advancedHTML');
});

app.get('/10minsadvanced', (req, res) =>{
    res.render('advanced/10minsadvanced');
});

app.get('/20minsadvanced', (req, res) =>{
    res.render('advanced/20minsadvanced');
});

app.get('/30minsadvanced', (req, res) =>{
    res.render('advanced/30minsadvanced');
});






