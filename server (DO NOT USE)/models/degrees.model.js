const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const degreeSchema = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        university: { type: String, required: true },
        degreeSubject: { type: String, required: true },
        degreeLevel: { type: String, required: true },
        grade: { type: String, required: true },
        from: { type: Number, required: true },
        to: { type: Number, required: true },
        weight: { type: String, required: true },
        priority: { type: String, required: true },
        description: { type: String, required: true }
    }
)

module.exports = mongoose.model('degree', degreeSchema);