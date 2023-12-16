const { connect } = require("mongoose");
const MongoToConnect = require("./db");
const cors = require('cors')
MongoToConnect(); 

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
//avialable routes
app.use('/',require('./routes/product'))
app.use('/',require('./routes/comments'))


app.get('/', (req, res) => {
  res.send('Hello test World!')
})

app.listen(5000)


