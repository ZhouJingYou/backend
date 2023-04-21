const mysql = require("mysql")

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "123456",
  database: process.env.MYSQL_DATABASE || "admin",
  // connectionLimit: 20, // 连接池最大连接数
  multipleStatements: true // 允许执行多条sql语句
})


module.exports = pool
