module.exports = {
    HOST : 'localhost',
    USER : 'postgres',
    PASSWORD : 'qwerty',
    DB: 'test-db',
    dialect: 'postgres',
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}