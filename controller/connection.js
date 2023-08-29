const mysql = require('mysql2')
require('dotenv').config()

const con = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PASWORD,
  database: process.env.DATABASE
})

  con.connect((err)=>{
    if (err) {throw err;}
    console.log('Conected DATABASE')
   // var sql = 'CREATE TABLE directorio (zip INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), phone VARCHAR(15), email VARCHAR(100), birthday DATE)'
    // con.query(sql, (err, result)=>{
     // if (err){throw err}
     // console.log(result + 'tabla creada')
   // })
  })

module.exports = con;