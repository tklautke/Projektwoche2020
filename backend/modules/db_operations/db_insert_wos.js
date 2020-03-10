const  express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbInsertWOS = async function dbInsertWOS(uuid, timestamp, firstName, lastName, schoolClass, adress, city, zipCode, discipline, performanceLevel, res) {
    console.log('database insert');
    new Promise((resolve, reject) => {
        try {
            //TODO Insert UUID and timestamp
            db.query(
                `INSERT INTO PROJEKTWOCHE_GRUNDSCHULE.WOS_REGISTRATIONS SET timestamp = ?, uuid = ?, CLASS = ?, ADRESS = ?, CITY = ?, ZIP_CODE = ?, DISCIPLINE = ?, PERFORMANCE_LEVEL = ?, FIRSTNAME = ?, LASTNAME = ?`,
                [timestamp, uuid, schoolClass, adress, city, zipCode, discipline, performanceLevel, firstName, lastName],
                resolve("success")
            );
        } catch {
            reject("error")
        }
    })
};
