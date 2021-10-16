const express = require('express');
const path = require('path');
const app = express();

const date = new Date();
const hour = date.getHours();

app.use('/css', express.static(path.join(__dirname, '../ques 3', 'css')));

app.use(express.urlencoded({extended: false}));

app.use('/home', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
            <head> 
                <meta/> 
                <title>demo</title> 
                <link href="${hour > 6 && hour < 18 ? '/css/day.css': '/css/night.css'}" rel="stylesheet"/>
            </head>
            <body>
            <form action="/results" method="post">
                <label>Name: <input type="text" name="name" /></label>
                <label>Age: <input type="text" name="age" /></label>
                <button type="submit">Submit Query</button>
            </form>
        </body>
    </html>`);
});


app.use('/results', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    res.redirect(303, `/output?name=${name}&age=${age}`);
});


app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (name && age) {
        res.send(`Name: ${name} Age: ${age}`);
        
    }else{
        name = "person";
        res.send(`Welcome ${name}`);
    }

});

app.listen(3000);