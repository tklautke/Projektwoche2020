const express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbUpdateWos = async function dbUpdateWos(lastname, signed, payed, res) {
    new Promise(function (resolve, reject) {
        try {
            db.query(
                `UPDATE PROJEKTWOCHE_GRUNDSCHULE.WOS_REGISTRATIONS SET signed = ?, payed = ? WHERE LASTNAME = ? `,
                [signed, payed, lastname],

                function () {
                    res.send("nice")
                },
                resolve("success")
            )
        } catch (error) {
            reject(error)
        }
    })
}
