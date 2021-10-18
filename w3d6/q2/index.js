const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));

app.get('/home', (req, res, next) => {
    res.render('index');
});


app.post('/results', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    res.render('results', {
        name: name,
        age: age
    })
});


app.listen(3000);