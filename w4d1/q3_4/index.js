const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

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
    },

    {
        id: 3,
        name: "Samsung s9",
        description: "Electronics",
        price: 700
    }
];

app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if(!req.session.cart){
        req.session.cart = {};
    }

    next();
});

app.get('/', (req, res, next) => {
    res.render('products', {products: products});
});


app.post('/addToCart', (req, res, next) => {
    let name = req.body.name;
    let price = parseInt(req.body.price);
    
    if(!req.session.cart[name]){
        
        // initialize if it doesn't exist
        req.session.cart[name] = {
            'name': name,
            'price': price,
            'quantity': 1
        } 
        
    }else{
        req.session.cart[name].price += price;
        req.session.cart[name].quantity += 1;  // increament its quantity if it is already in the cart
    }
    res.redirect(303, '/cart');
});

app.get('/cart', (req, res, next) => {
    res.render('shoppingCart', {cart: req.session.cart})
});

app.listen(3000);