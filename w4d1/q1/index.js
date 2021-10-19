const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    // console.log(req.cookies);
    res.render('index', {cookies: req.cookies});
});

app.post('/add', (req, res) =>{
    let key = req.body.key;
    let value = req.body.value;

    res.cookie(key, value);
    res.redirect(303, '/');
});

app.listen(3000);
