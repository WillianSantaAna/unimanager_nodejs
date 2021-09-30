const util = require('util')
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'unimanager',
    host: 'localhost',
    database: 'unimanager',
    password: 'uni1234',
    port: 5432,
})

pool.query = util.promisify(pool.query)

module.exports = pool