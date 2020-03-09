const express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbSelect = async function dbSelect(username, password, res) {
    console.log('database select');
    console.log("Username is:", username);
    new Promise((resolve, reject) => {
        try {
            db.query(
                `SELECT * FROM PROJEKTWOCHE_GRUNDSCHULE.USER WHERE username = '${username}'`,
                (err, result, fields) => {
                    console.log(result);
                    //TODO let service dont crash if the username is not in database

                    if(result.length == 0){
                        console.log("Test");
                        res.send("User doesnt exist");
                        return;
                    }
                    const passwordDB = result[0].password;

                    let isPasswordValid = false;
                    if(passwordDB == password){
                        isPasswordValid = true;
                        res.send("User and password are correct: " + isPasswordValid);
                    }else{
                        isPasswordValid = false;
                        res.send("User and password aren't correct: " + isPasswordValid);
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
