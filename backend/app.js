const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbInsert = require('./modules/db_operations/db_insert.js');
const dbSelect = require('./modules/db_operations/db_select.js')

/*This is the port where the page starts */
const port = 8080;
app.listen(port, () => console.log(`Server started at port: ${port}`));


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

app.use(express.static('/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/'));

app.get('/', function (req, res) {
    res.sendFile('/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/index.html')
});

app.post('/registration', (req, res) => {
    const reqBody = req.body;
    const firstName = reqBody.FirstName;
    const lastName = reqBody.LastName;
    const username = reqBody.Username;
    const password = reqBody.Password;

    console.log(firstName, lastName, username, password);

    dbInsert.dbInsert(firstName, lastName, username, password);
    res.send("success /registration")
});

app.post('/login', (req, res) => {
    const reqBody = req.body;
    const username = reqBody.Username;
    const password = reqBody.Password;

    dbSelect.dbSelect(username, password);
    console.log(username, password);
    res.send("success /login")
});




