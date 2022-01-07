//const ObjectId = mongoose.Schema.Types.ObjectId;
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const testUser = new mongoose.Schema({

    "_id": { type: ObjectId, required: true },
    "userName": {type: String},
    "age": {type: Number},
    "profession": {type: String}

});

module.exports = mongoose.model("user", testUser)