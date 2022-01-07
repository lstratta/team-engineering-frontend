const express = require("express");
const router = express.Router();
const IndustryPartner = require("../models/industryPartner.model");
const Vacancy = require("../models/vacancies.model");

router.route("/")
    .get(async (req, res) => {
        
        IndustryPartner.find( (error, indPartner) => {
            error ? res.status(404).send('Not Found') : res.json(indPartner)
        })
    })

router.route("/:_id")
    .get( async (req, res) => {

        IndustryPartner.findById(req.params._id, (error, indPartner) => {

            error ? res.status(404).send('Industry partner not found') : res.send(indPartner)
        })
    })

router.route("/edit/:id/addvacancy")
    .post( async (req,res) => {
        
        IndustryPartner.findById(req.params.id, (error, indPartner) => {
            
            const vacancy = new Vacancy(req.body.vacancy);
            indPartner.vacancies.push(vacancy);

            indPartner.save()
                .then(indPartner => {
                    res.json("Vacancy added")
                })

            .catch(error => {
                res.status(400).send("Adding vacancy failed")
            })
        })
    })




    module.exports = router;