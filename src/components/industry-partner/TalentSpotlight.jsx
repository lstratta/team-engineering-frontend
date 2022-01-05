import GraduateCard from "./GraduateCard.jsx";

const TalentSpotlight = () => {

    return( 
        <div>
            <div className="headline">
               <h2>Talent Spotlight</h2>
            </div>
            <div className="description">
                <p> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p>
            </div>
            <div className="software-engineering-section">
                <div className="software-engineering-title">
                    <h3>Software Engineering</h3>
                </div>
                <div>
                     
                    < GraduateCard />
                </div>
            </div>
            <div className="data-science-section">
                <div className="data-science-title">
                    <h3>Data Science</h3>
                </div>
                <div>
                    {/* map to jsx data */} 
                </div>
            </div>

        </div> 
    );

}

export default TalentSpotlight;