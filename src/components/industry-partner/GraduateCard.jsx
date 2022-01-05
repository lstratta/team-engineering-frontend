const GraduateCard = () => {
    
    return(
        <div className="graduate-card">
            <div className="profile-image">
                <img src="../assets/df-log-black.png" alt="Digital Futures logo"/>
            </div>
            <div className="profile-name">
                <h4>Jane Doe</h4>
            </div>
            <div className="student-data">
                <p>Carbonara</p>
                <p>Front End</p>
                <p>Python</p>
            </div>
            <div className="view-profile-button">
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default GraduateCard;