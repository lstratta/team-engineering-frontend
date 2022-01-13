import { useState, useEffect } from "react";
import axios from "axios";

import GraduateCard from "./GraduateCard.jsx";
import DataScienceSection from "./DataScienceSection.jsx";
import SoftwareEngineeringSection from "./SoftwareEngineeringSection.jsx";
import Navbar from "../NavBar";
import "../../css/talent-spotlight.css";

const TalentSpotlight = ({ serverURL }) => {
  const [graduates, setGraduates] = useState([]);

  const dataServer = serverURL + "graduate";
  console.log("TALENT SPOTLIGHT SERVER URL", serverURL);

  const getData = async () => {
    await axios
      .get(dataServer)
      .then((res) => {
        setGraduates(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="talent-spotlight-top">
      <div className="headline">
        <h2>Talent Spotlight</h2>
      </div>
      <div className="description">
        <p>
          {" "}
          The talent spotlight is where you can find the graduates that are
          right for your business.
        </p>
        <p>
          Whether you are looking for highly-skilled Data Scientists or Software
          Engineers, each one of our graduates will be an asset to your team.
        </p>
        <p>
          View each of our graduate's profiles below to see what their specific
          skills are and decide whether you'd like to interview them.
        </p>
      </div>
      </div>
      <div className="data-science-section">
        <DataScienceSection graduates={graduates} />
      </div>

      <div className="software-engineering-section">
        <SoftwareEngineeringSection graduates={graduates} />
      </div>
    </div>
  );
};

export default TalentSpotlight;
