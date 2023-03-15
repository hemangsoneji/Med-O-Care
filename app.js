const express = require("express")
require("./db.js")
require('dotenv').config()
const cors = require("cors")
const bodyParser = require("body-parser")

const userRoutes = require("./routes/userRoutes")

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

// user 
app.use('/user',userRoutes)


app.listen(process.env.PORT, () => console.log(`Listening on port 4000`))
