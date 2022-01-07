const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const graduateSchema = new mongoose.Schema(
    {

        _id: { type: ObjectId, required: true},
        available: {type: Boolean, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        dateOfBirth: {type: Number, required: true},
        gender: {type: String, required: true},
        nationality: {type: String, required: true},
        personality: {type: String, required: true},
        phone: {type: Number, required: true},
        linkedin: {type: String, required: true},
        gitHub: {type: String, required: true},
        personalEmail: {type: String, required: true},
        digitalFuturesEmail: {type: String, required: true},

        degrees: [
            { type: Object }
        ], 

        workExperience: [ 
            
            { type: Object }
            
        ],

        schoolQualifications: [

            { type: Object }
        ],

        certificatesAndAwards: [

            { type: Object }
        ],

        portfolio: [
            
            { type: Object }
        ], 

        personalSummary: {type: String, required: true},
        cohort: {type: String, required: true},
        learningPath: {type: String, required: true},
        trainer: {type: String, required: true},
        trainingFinishDate: {type: Number, required: true}
    },

    {
        collection: "graduateUser"
    }


)

module.exports = mongoose.model('graduate', graduateSchema);