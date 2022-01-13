import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "../../css/profile-card.css"

const ProfileCard = ( { graduate } ) => {

    return (

            <div className="pc-profile-card">

                <div className="container">
                    
                    <div className="pc-outer-profile-guide">
                        <div className="pc-profile-image">
                        
                            { !graduate.picture ? <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" /> : <img src={graduate.picture} alt="Profile Image" /> }

                        </div>

                        <div className="pc-profile-name">
                            <h4>{graduate.firstName + " " + graduate.lastName}</h4>
                        </div>
                    </div>
                    
                    <div className="pc-degree-github">
                        <div className="pc-degree-icon">
                            <h5> <img src="../assets/graduate-cap.png" alt="graduate cap" /> {graduate.degrees[0].degreeSubject}</h5>
                        </div>

                        <div className="pc-github-icon">
                            <h5><img src="../assets/github-logo.png" alt="github icon" /> {graduate.gitHub}</h5>
                        </div>
                    </div>


                    <div className="pc-view-profile-button">
                        <Link to={`/graduate/${graduate._id}/`}>
                            <Button>View Your Profile</Button>
                        </Link>
                    </div>

                </div>

            </div>

    );
}

export default ProfileCard;