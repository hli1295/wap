const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/home', (req, res, next) => {
    res.send('<form action="/results" method="post"><label>Name: <input type="text" name="name"/></label><label>Age: <input type="text" name="age"/></label><button type="submit">Submit Query</button> </form>');
});


app.use('/results', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    res.send(`Name ${name} Age ${age}`);
    // res.redirect('/'); // This one is a good practice
});