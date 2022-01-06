import "../../css/graduate-card.css"

const GraduateCard = (graduate) => {

    const graduateUser = graduate.graduate;

    return (
        <div className="graduate-card">
            <div className="profile-image">
                <img src="../assets/df-log-black.png" alt="Digital Futures logo" />
            </div>
            <div className="profile-name">
                <h4>{graduateUser.firstName + " " + graduateUser.lastName}</h4>
            </div>
            <div className="student-data">
                <h5>{graduateUser.personalSummary}</h5>
                <h5>{graduateUser.degrees[0].degreeSubject}</h5>
                <h5>{graduateUser.gitHub}</h5>
            </div>
            <div className="view-profile-button">
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default GraduateCard;