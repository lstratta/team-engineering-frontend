const express = require('express');

const router = express.Router();

const Graduate = require("../models/graduate.model")
const Degree = require("../models/degrees.model");
const WorkExperience = require("../models/workExperience.model");
const SchoolQualification = require("../models/schoolQualifications.model");
const CertificatesAndAwards = require("../models/certificatesAndAwards.model");
const Portfolio = require("../models/portfolio.model");


router.route('/') // All trainees
    .get(async (req, res) => {
        // console.log("trainee.js '/' GET Request");
        Graduate.find((error, Graduate) => {
            error ? res.status(404).send('Not found') : res.json(Graduate);
        })
    })

router.route('/:_id')
    .get(async (req, res) => {

        //console.log("REQ.PARAMS ", req.params)
        //console.log("trainee.js '/:_id GET request");
        Graduate.findById(req.params._id, (error, grad) => {
            //console.log("Character ", character);
            if (!grad) {
                res.status(404).send("Graduate not found");
            }
            else if (error) {
                console.log(error);
            }
            else {
                res.send(grad);
            }
        })
    })

router.route("/:_id/edit")
    .put(async (req, res) => {
        const id = req.params._id;

        Graduate.findById(id, (error, grad) => {
            if (!grad) {
                res.status(404).send(`Graduate couldn't be found`);
            } else if (error) {
                console.log(error);
            } else {
                if (req.body?.gitHub) {
                    grad.gitHub = req.body.gitHub;
                }
                if (req.body?.phone) {
                    grad.phone = req.body.phone;
                }
                grad.save().then(grad => {
                    res.json(`Character updated`);
                })
                    .catch(err => res.status(400).send(`Updating data failed`));
            }
        })
    })

router.route("/:_id/edit")
    .post(async (req, res) => {

        const id = req.params._id;

        if (req.body?.degrees) {
            Graduate.findById(id, (error, grad) => {
                if (!grad) {
                    res.status(404).send(`Character couldn't be found`);
                } else if (error) {
                    console.log(error);
                } else {
                    const degree = new Degree(req.body.degrees);
                    grad.degrees.push(degree);
                    grad.save().then(grad => {
                        res.json(`Character updated`);
                    })
                        .catch(err => res.status(400).send(`Updating data failed`));
                }
            })
        }

        if (req.body?.workExperience) {
            Graduate.findById(id, (error, grad) => {
                if (!grad) {
                    res.status(404).send(`Character couldn't be found`);
                } else if (error) {
                    console.log(error);
                } else {
                    const work = new WorkExperience(req.body.workExperience);
                    grad.workExperience.push(work);
                    grad.save().then(grad => {
                        res.json(`Character updated`);
                    })
                        .catch(err => res.status(400).send(`Updating data failed`));
                }
            })
        }

        if (req.body?.schoolQualification) {
            Graduate.findById(id, (error, grad) => {
                if (!grad) {
                    res.status(404).send(`Character couldn't be found`);
                } else if (error) {
                    console.log(error);
                } else {
                    const school = new SchoolQualification(req.body.schoolQualification);
                    grad.schoolQualifications.push(school);
                    grad.save().then(grad => {
                        res.json(`Character updated`);
                    })
                        .catch(err => res.status(400).send(`Updating data failed`));
                }
            })
        }

        if (req.body?.certificatesAndAwards) {
            Graduate.findById(id, (error, grad) => {
                if (!grad) {
                    res.status(404).send(`Character couldn't be found`);
                } else if (error) {
                    console.log(error);
                } else {
                    const certs = new CertificatesAndAwards(req.body.certificatesAndAwards);
                    grad.certificatesAndAwards.push(certs);
                    grad.save().then(grad => {
                        res.json(`Character updated`);
                    })
                        .catch(err => res.status(400).send(`Updating data failed`));
                }
            })
        }

        if (req.body?.portfolio) {
            Graduate.findById(id, (error, grad) => {
                if (!grad) {
                    res.status(404).send(`Character couldn't be found`);
                } else if (error) {
                    console.log(error);
                } else {
                    const newPortfolio = new Portfolio(req.body.portfolio);
                    grad.portfolio.push(newPortfolio);
                    grad.save().then(grad => {
                        res.json(`Character updated`);
                    })
                        .catch(err => res.status(400).send(`Updating data failed`));
                }
            })
        }
    })

router.route("/:_id/edit/degrees")
    .put( async (req, res) => {

        const id = req.params._id;

        console.log("REQ.PARAMS.ID", id)
        // console.log("REQ BODY:", req.body)

        // Graduate.find( (error, grad) => {
        //     error ? console.log(error) : console.log(grad)
        // })

        Graduate.findById(id,  (error, grad) => {

            if (error) {
                console.log(error)
            } else {

                console.log("GRAD FOUND")

                const gradDegrees = grad.degrees;

                // for (let i = 0, j = gradDegrees.length; i < j; i++){

                //     for (const key in gradDegrees[i]){

                //         if (gradDegrees[i][key] === id) {
                //             console.log("GRAD DEGREE ID FOUND")                                
                //         }
                //     }
                // }
                
            }
        })
        
    })

module.exports = router;