const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const workExperienceSchema = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        type: { type: String },
        employer: { type: String },
        position: { type: String },
        from: { type: Number },
        to: { type: Number },
        weight: { type: String },
        priority: { type: String },
        description: { type: String },
    }
)

module.exports = mongoose.model('workExperience', workExperienceSchema);