let Sequelize = require('sequelize')

const database = new Sequelize(
    'database',
    'admin',
    'admin',
    {
        host: './database.sqlite3',
        dialect: 'sqlite'
    }
);

database.sync()

module.exports = database