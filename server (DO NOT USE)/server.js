const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const dbURI = process.env.DB_URI

const routes = require('./routes/api');

const main = async() => {
    await mongoose.connect(dbURI);}

main().catch(err => console.log(err));

// Allows the data being sent by the POST
// request to be read by the server
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes);

app.listen(PORT, console.log('Server is listening on PORT: ', PORT));
