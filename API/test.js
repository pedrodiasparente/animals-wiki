const express = require('express')
const app = express()
const port = 12080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})