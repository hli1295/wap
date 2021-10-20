const express = require('express');
const path = require('path');

const app = express();

const list = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/8ball', (req, res) => {
    randomText = list[Math.floor(Math.random() * list.length)];
    console.log(randomText);
    res.send(randomText);
});

app.listen(3000, () => {
    console.log("listening in port 3000");
});