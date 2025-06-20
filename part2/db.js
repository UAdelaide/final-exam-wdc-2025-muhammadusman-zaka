var mysql = require('mysql2/promise');

const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DogWalkService'
};

module.exports = async () => mysql.createConnection(db);
