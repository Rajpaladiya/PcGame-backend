const { connect } = require("mongoose");
const MongoToConnect = require("./db");
const Game = require('./models/PRODUCT');
const cors = require('cors')
MongoToConnect();

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
//avialable routes
// app.use('/',require('./routes/product'))
app.use('/',require('./routes/comments'))

app.get('/FetchGame', async(req, resp) => {

    try {
        const games =  await Game.find()
        // resp.json(games)
        console.log(games)
        resp.send(games)
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("internal Server Error")
    }
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000)


