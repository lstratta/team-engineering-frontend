import { useNavigate } from "react-router-dom";

import "../../css/profile-card.css"

const ProfileCard = ( { graduate } ) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate(`${graduate._id}`)
    }

    return (

        <div className="profile-card">

            <div className="profile-image">
                
                { !graduate.picture ? <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" /> : <img src={graduate.picture} alt="Profile Image" /> }

            </div>

            <div className="profile-name">
                <h4>{graduate.firstName + " " + graduate.lastName}</h4>
            </div>

            <div className="student-data">

                <div className="degree-github">

                    <div className="degree-icon">
                        <h5> <img src="../assets/graduate-cap.png" alt="graduate cap" /> {graduate.degrees[0].degreeSubject}</h5>
                    </div>

                    <div className="github-icon">
                        <h5><img src="../assets/github-logo.png" alt="github icon" /> {graduate.gitHub}</h5>
                    </div>

                </div>

            </div>

            <div>
                <button onClick={onClick}>View Your Profile</button>
            </div>

        </div>
    );
}

export default ProfileCard;