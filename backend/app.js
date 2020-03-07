const express = require('express');
const bodyParser = require('body-parser');
const  app = express();

/*This is the port where the page starts */
const  port = 8080;
app.listen(port, ()=> console.log(`Server started at port: ${port}`));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(express.static(__dirname + '../frontend/'));
app.use(express.static( '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/'));

app.get('/', function (req, res) {
    res.sendFile('/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/index.html')
});




