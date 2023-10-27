const express = require('express')
const app = express()
const port = 5001
const {readdirSync} = require('fs')


app.use(require("cors")());
app.use(express.json());



readdirSync('./Route')
      .map((r) => app.use('/api', require('./Route/' + r)))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})