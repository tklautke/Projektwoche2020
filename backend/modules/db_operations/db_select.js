const express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbSelect = async function dbSelect(username, password) {
    console.log('database select');
    console.log("Username is:", username);
    new Promise((resolve, reject) => {
        try {
            db.query(
                `SELECT * FROM PROJEKTWOCHE_GRUNDSCHULE.USER WHERE username = '${username}'`,
                (err, result, fields) => {
                    console.log(result);
                    const usernameDB = result[0].username;
                    const passwordDB = result[0].password;
                    let isPasswordValid = false;
                    if(passwordDB == password){
                        isPasswordValid = true;
                    }else{
                        isPasswordValid = false;
                    }

                    console.log("Password is is database: " + isPasswordValid);

                },
                resolve("success")
            );
        } catch {
            reject("error")
        }
    })
};
