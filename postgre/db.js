const {Pool}= require('pg')
const pool=new Pool({
    host: 'db',
    port: 5432,
    user:'github',
    password: 'github',
    database:  'github123'
}) 


module.exports=pool