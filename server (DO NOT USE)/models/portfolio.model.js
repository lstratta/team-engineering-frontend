const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const portfolioSchema = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        title: { type: String },
        url: { type: String },
        year: { type: Number },
        weight: { type: String },
        priority: { type: Number },
        description: { type: String }
    }
)

module.exports = mongoose.model('portfolio', portfolioSchema);