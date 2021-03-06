const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbInsert = require('./modules/db_insert.js');
const dbUpdateWos = require('./modules/db_update_wos.js');
const dbInsertWOS = require('./modules/db_insert_wos.js');
const dbSelect = require('./modules/db_select.js');
const uuidv1 = require('uuidv1');

//these paths need to be changes on the server
const pathFrontend = '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/';
const pathIndex = '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/index.html';
const pathWosLehrer = '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/wosLehrer.html';
const pathWosSchueler = '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/wosSchueler.html';
const pathPrint = '/Users/theoklautke/Projekte/Projektwoche2020/source/frontend/print.html';

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

app.use(express.static(pathFrontend));

app.get('/', function (req, res) {
    res.sendFile(pathIndex)
});

app.get('/wosLehrer', function (req, res) {
    res.sendFile(pathWosLehrer)
});

app.get('/wosSchueler', function (req, res) {
    res.sendFile(pathWosSchueler)
});

app.get('/print', function (req, res) {
    res.sendFile(pathPrint)
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

    dbInsert.dbInsert(firstName, lastName, username, password, uuid, timestamp, typ);
    res.send("success /registration")
});

app.post('/login', (req, res) => {
    const reqBody = req.body;
    const username = reqBody.Username;
    const password = reqBody.Password;
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

app.post('/accept-pupil', (req, res) => {
    const reqBody = req.body;

    const lastname = reqBody.lastname;
    const signed = reqBody.signed;
    const payed = reqBody.payed;

    dbUpdateWos.dbUpdateWos(lastname, signed, payed, res);
});
