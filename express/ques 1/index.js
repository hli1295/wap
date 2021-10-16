const express = require('express');
const app = express();

app.get('/', (req, res) => {
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