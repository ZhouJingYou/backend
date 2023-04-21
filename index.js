const express = require("express")
const app = express()
const pool = require("./config/db")
require("./config/env")

const cors = require("cors")
app.use(cors())
app.get("/", (req, res) => {
  res.send("welcome node server:3000")
})
app.get("/api/v1/novel/query", (req, res) => {
  let sql = "select * from novel"
  pool.query(sql, (err, result) => {
    console.log("err :>> ", err)
    console.log("result :>> ", result)
    res.send(`res.length:${result.length}`)
  })
})
app.use('/user',userRouter)
app.post("/api/v1/user/pageQuery", (req, res) => {
  let sql = "select * from user"
  pool.query(sql, (err, result) => {
    res.send({
      code: 0,
      success: true,
      data: result,
      msg: ""
    })
  })
})
app.listen(3000, (req, res) => {
  console.log("listening 3000")
})
