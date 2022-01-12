import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "../../css/profile-card.css"

const ProfileCard = ( { graduate } ) => {

    

    return (

        <div className="outer-div">

            <div className="profile-card">

                <div className="container">

                    <div className="outer-profile-guide">

                        <div className="profile-image">
                            
                            { !graduate.picture ? <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" /> : <img src={graduate.picture} alt="Profile Image" /> }

                        </div>

                        <div className="profile-name">
                            <h4>{graduate.firstName + " " + graduate.lastName}</h4>
                        </div>

                    </div>

                    <div className="degree-github">


                        <div className="degree-icon">
                            <h5> <img src="../assets/graduate-cap.png" alt="graduate cap" /> {graduate.degrees[0].degreeSubject}</h5>
                        </div>

                        <div className="github-icon">
                            <h5><img src="../assets/github-logo.png" alt="github icon" /> {graduate.gitHub}</h5>
                        </div>

                    
                    </div>


                    <div className="view-profile-button">
                        <Link to={`/graduate/${graduate._id}/`}>
                            <Button>View Your Profile</Button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProfileCard;