
const ProfileCard = ( { graduate } ) => {

    return (

        <div className="profile-card">
            <div className="profile-image">
                {/* { !graduate.picture ? <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" /> : <img src={graduate.picture} alt="Profile Image" /> } */}

                {!graduate.picture && <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" />}
                {graduate.picture && <img src={graduate.picture} alt="Profile picture" />}
            </div>

            <div className="profile-name">
                <h4>{graduate.firstName + " " + graduate.lastName}</h4>
            </div>

            <div className="student-data">

                <h5 className="summary">" {graduate.personalSummary} " </h5>

                <div className="degree-github">
                    
                    <div className="degree-icon">
                        <h5> <img src="../assets/graduate-cap.png" alt="graduate cap" /> {graduate.degrees[0].degreeSubject}</h5>
                    </div>

                    <div className="github-icon">
                        <h5><img src="../assets/github-logo.png" alt="github icon" /> {graduate.gitHub}</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileCard;