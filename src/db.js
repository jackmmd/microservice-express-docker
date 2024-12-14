const mysql = require('mysql2/promise');
const { DB_HOST,DB_PORT,DB_NAME,DB_USER,DB_PASSWORD } = require('./constants')
const connectionOptions = {
   host: DB_HOST,
   port: DB_PORT,
   database: DB_NAME,
   user: DB_USER,
   password: DB_PASSWORD,
   multipleStatements: true
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log(err)
        console.log('MySQL database connection error!');
        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;
