var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    // Using parameterized query to prevent SQL Injection
    var q = "SELECT * FROM users WHERE name = $1 AND password = $2;";

    return db.one(q, [username, password]);
}

module.exports = do_auth;
