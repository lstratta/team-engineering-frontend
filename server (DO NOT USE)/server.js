const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

//console.log(`${process.env.NODE_ENV}`)

const app = express();
// const PORT = process.env.PORT;
// const dbURI = process.env.DB_URI
const PORT = 8080;
const dbURI = "mongodb://localhost:27017/dfxtra-test";
//console.log(dbURI)

const traineeRoutes = require('./router/trainee');
const industryPartnerRoutes = require("./router/industryPartner")

const main = async () => {
    await mongoose.connect(dbURI)
        .then(res => console.log("Database connected"))
    //.catch( res => console.log("ERROR: Database not connected : ", res))
}

main().catch(err => console.log(err));

// Allows the data being sent by the POST
// request to be read by the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

app.use('/trainee', traineeRoutes);
app.use('/industrypartner', industryPartnerRoutes)

const server = app.listen(PORT, console.log('Server is listening on PORT: ', PORT));

module.exports = server;