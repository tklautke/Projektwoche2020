const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbInsert = require('./modules/db_operations/db_insert.js');
const dbInsertWOS = require('./modules/db_operations/db_insert_wos.js');
const dbSelect = require('./modules/db_operations/db_select.js');
const uuidv1 = require('uuidv1');

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

app.get('/home', function (req, res) {
    res.sendFile('/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/home.html')
});

app.post('/registration', (req, res) => {
    const reqBody = req.body;
    const firstName = reqBody.FirstName;
    const lastName = reqBody.LastName;
    const username = reqBody.Username;
    const password = reqBody.Password;
    const typ = reqBody.typ;
    const uuid = uuidv1();
    const timestamp = new Date();

    console.log(firstName, lastName, username, password, uuid, timestamp);
    console.log("Der Typ ist: " + typ);

    dbInsert.dbInsert(firstName, lastName, username, password, uuid, timestamp, typ);
    res.send("success /registration")
});

app.post('/login', (req, res) => {
    const reqBody = req.body;
    const username = reqBody.Username;
    const password = reqBody.Password;
    console.log(username);
    dbSelect.dbSelect(username, password, res);
});

app.post('/wosInput', (req, res) => {
    const reqBody = req.body;
    const firstName = reqBody.firstName;
    const lastName = reqBody.lastName;
    const schoolClass = reqBody.schoolClass;
    const adress = reqBody.adress;
    const city = reqBody.city;
    const zipCode = reqBody.zipCode;
    const discipline = reqBody.discipline;
    const performanceLevel = reqBody.performanceLevel;
    const uuid = uuidv1();
    const timestamp = new Date();

    dbInsertWOS.dbInsertWOS(uuid, timestamp, firstName, lastName, schoolClass, adress, city, zipCode, discipline, performanceLevel, res);
    res.send("nice");
});
