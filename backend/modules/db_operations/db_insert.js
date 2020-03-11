const express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbInsert = async function dbInsert(firstName, lastName, username, password, uuid, timestamp, type) {
    console.log('database insert');
    new Promise((resolve, reject) => {
        try {
            //TODO Insert UUID and timestamp
            console.log(firstName, lastName, username, password, uuid, timestamp, type);
            db.query(
                `INSERT INTO PROJEKTWOCHE_GRUNDSCHULE.FULL_USER SET timestamp = ?, uuid = ?, firstName = ?, lastName = ?, username = ?, password = ?, type = ?`,
                [timestamp, uuid, firstName, lastName, username, password, type],
                resolve("success")
            );
        } catch (error) {
            reject(error)
        }
    })
};
