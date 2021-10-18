const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let products = [
    {
        id: 1,
        name: "Samsung A12",
        description: "Electronics",
        price: 400
    },

    {
        id: 2,
        name: "IPhone 8",
        description: "Electronics",
        price: 500
    }
];

app.get('/', (req, res, next) => {
    res.render('products', {products: products});
});

app.listen(3001);