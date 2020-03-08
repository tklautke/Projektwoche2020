const database = require('./connection.js');

exports.userInsert = async function userInsert(firstName, lastName, username, password) {
    const databaseTable  = "projektwoche2020.user";
    new Promise(function (resolve, reject) {
        try {
            database.query(`INSERT INTO ${databaseTable}
            SET firstName = ?, lastName = ?, username = ?, password = ?`,
                [firstName, lastName, username, password],
                resolve("success"))
        }catch {
            reject("Error")
        }
    })
};
