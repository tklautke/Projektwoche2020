const express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbSelect = async function dbSelect(username, password, res) {
    new Promise((resolve, reject) => {
        try {
            db.query(
                `SELECT * FROM PROJEKTWOCHE_GRUNDSCHULE.FULL_USER WHERE username = '${username}'`,
                (err, result, fields) => {
                    if (result.length == 0) {
                        res.send("err");
                        return;
                    }
                    const passwordDB = result[0].password;

                    let isPasswordValid = false;
                    if (passwordDB == password) {
                        isPasswordValid = true;
                        res.send("correct credentials");
                    } else {
                        isPasswordValid = false;
                        res.send("wrong password");
                    }
                    console.log("Password is is database: " + isPasswordValid);
                },
                resolve("success")
            );
        } catch (error) {
            reject(error)
        }
    })
};
