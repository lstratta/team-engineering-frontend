import React from "react";
import NavBar from "../NavBar";
import "../../css/demo-homepage.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DemoHomepage() {

    return (
        <div>
            <NavBar />
            <div className="element">
                <div className="demo-buttons">
                    
            <Link to={`/graduate`}><Button variant="primary" className="grad-btn"> <img className="btn-pics" src="/assets/graduate-cap-white.png" alt="hat"/>Graduate </Button></Link>
            <Link to={`/industry-partner/TalentSpotlight`}><Button variant="primary" className="partner-btn"> <img className="btn-pics" src="/assets/deal.png" alt="hat"/> Partner</Button></Link>
            </div>
            </div>


        </div>
    )

}