const express = require('express');
const body_parser = require('body-parser');
const mongodb = require('mongodb');
const path = require('path');
const { resolveSoa } = require('dns');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 7000;
const app = express();
app.set('view engine','ejs');

app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));

let db_handler;
    const DB_URL = process.env.DB_URL;
    const DB_NAME = process.env.DB_NAME;
    const CONTACT_COLLECTION = process.env.CONTACT_COLLECTION;


app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);

//users contact/feedback using mongodb
    let mongo_client = mongodb.MongoClient;   
    mongo_client.connect(DB_URL, (err, db_users) => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Let's Learn!");
            db_handler = db_users.db(DB_NAME);
        }
    });
}) 

// app.get('/contact', (req, res) => {
//     db_handler.collection(CONTACT_COLLECTION).find({ }).toArray( (err, result)=> {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(result);
//             res.render('index', {
//                 'all_users': result
//             });
//         }
//     });
// });

//users contact form starts here//
app.post('/contact', (req, res) => {
    const form_data = req.body;
    // console.log(req.body);
    const name = form_data['Name'];
    const emailAddress = form_data['Email'];
    const level = form_data['Subject']; 
    const comments = form_data['Message'];
   
    const my_obj = {
        name: name,
        emailAddress: emailAddress,
        usersLevels: level,
        usersComments: comments
    }
    console.log(my_obj);
    db_handler.collection(CONTACT_COLLECTION).insertOne(my_obj, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Thanks for your comments. We will get back to you.");
            // send response to browser once we are done with db
            res.redirect('/');
        }
    })
});

app.get('/contact', (req, res) => {
    res.render('navigation/contact');
});

//users contact form ends here//

//user submit comments start here//
app.post('/submitcontact', (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
});
//user submit comments end here//

//user search button starts here//
app.get('/search/:searchTerm', (req, res) =>{
    const parameters = req.params;
    console.log(parameters);
    const searchTerm = parameters["searchTerm"];
    console.log(searchTerm);
    db_handler.collection("usersSearch").find({tag:searchTerm}).toArray( (err, result)=> {
        if (err) {
            console.log(err);
        }
        else {
            if(result.length > 0){
                res.redirect(result[0].href);
                console.log('Redirecting to' + result[0].href);
            }else{
                res.send('Sorry, the topic is not available. If you want to learn about this topic, please contact us.');
            }
        };
    }) 
});
//user search button starts here//

//user login starts here//
app.get('/login', (req, res) => {
    res.render('navigation/login');
});

app.post('/login', (req, res) => {
    const form_data = req.body;
    console.log(form_data);
    const username = form_data['username'];
    const password = form_data['password'];

    const my_login = {
        name: username,
        password: password     
    }

    if(username.length < 5){
        res.send('username cannot be < 5');
    }
    if(password.length < 5 || description.length > 12){
        res.send('Password must be between 5-12 characters');
    }   
});
//login ends here//

//user signup starts here//
app.get('/signup', (req, res) =>{
    res.render('navigation/signup');
});

app.post('/signup', (req, res) => {
    const form_data = req.body;
    console.log(form_data);
    const signupnewuser = form_data['username'];
    const emailforsignup = form_data['Email Address'];
    const pwdforsignup = form_data['Password'];
    const pwdconfirmsignup = form_data['Confirm Password'];

    const new_signup = {
        newusername: signupnewuser,
        newuseremailAddress: emailforsignup,
        newuserpwd: pwdforsignup,
        newuserconfirmpwd: pwdconfirmsignup
    }

    if(signupnewuser.length < 5){
        res.send('signupnewuser cannot be < 5');
    }
    if(pwdforsignup.length < 5 || pwdforsignup.length > 12){
        res.send('Password must be between 5-12 characters');
    }   

    res.redirect('/');
});

//user signup ends here//

//forgot pwd starts here//
app.get('/forgotpwd', (req, res) =>{
    res.render('navigation/forgotpwd');
})
//forgot pwd ends here//

//redirecting to login pg if user already got an acct starts here
app.get('/signup', (req, res) =>{
    res.render('navigation/login');
})

//redirecting to login pg if user already got an acct ends here

app.get('/', (req, res) => {
        res.render("index"); 
});

app.get('/about', (req, res) => {
    res.render('navigation/about');
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






