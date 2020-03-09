const  express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbInsert = async function dbInsert(firstName, lastName, username, password,  uuid, timestamp) {
    console.log('database insert');
    new Promise((resolve, reject) => {
        try {
            //TODO Insert UUID and timestamp
            console.log(firstName, lastName, username, password, uuid, timestamp);
            db.query(
                `INSERT INTO PROJEKTWOCHE_GRUNDSCHULE.FULL_USER SET timestamp = ?, uuid = ?, firstName = ?, lastName = ?, username = ?, password = ?`,
                [timestamp, uuid, firstName, lastName, username, password],
                resolve("success")
            );
        } catch {
            reject("error")
        }
    })
};
