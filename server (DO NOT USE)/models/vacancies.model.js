const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const vacancySchema = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        position: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        relocationSupport: { type: Boolean, required: true },
        workingArrangement: { type: String, required: true },
    }
)

module.exports = mongoose.model('vacancy', vacancySchema);