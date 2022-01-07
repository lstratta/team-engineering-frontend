const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const certificatesAndAwardsSchema = new mongoose.Schema(
    {
        _id : {type: ObjectId, required: true},
        type: {type: String},
        issuer: {type: String},
        award: {type: String},
        grade: {type: String},
        year: {type: Number},
        weight: {type: String},
        priority: {type: String},
        description: {type: String}
    }
)

module.exports = mongoose.model('certificatesAndAwards', certificatesAndAwardsSchema);