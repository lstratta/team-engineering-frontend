const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const industryPartnerSchema = new mongoose.Schema(
    {
        _id: { type: ObjectId, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        companyName: { type: String, required: true },
        email: { type: String, required: true },
        vacancies:
            [
                { type: Object }
            ]
    },
    {
        collection: 'industryPartnerUser'
    }
)

module.exports = mongoose.model('industryPartner', industryPartnerSchema)