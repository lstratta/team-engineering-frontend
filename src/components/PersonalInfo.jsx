import React from "react";


export default function PersonalInfo({ firstName, lastName, digitalFuturesEmail, gitHub, linkedIn, phone }) {
    return (
      <div>
        <div className="ep-personal-info">
          <h1>Personal Information</h1>
          <p>
            Name:{firstName} {lastName}{" "}
          </p>
          <p>Digital Futures Email:{digitalFuturesEmail}</p>
          <p>Github:{gitHub}</p>
          <p>LinkedIn: {linkedIn}</p>
          <p>Phone{phone}</p>
        </div>
        <div className="dropdown-forms">
          <form action="#">
            <select name="gender" id="gender">
                <option value="" selected disabled hidden>Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="nonBinary">Non-Binary</option>
                <option value="other">Prefer not to say</option>
            </select>
            <br />
            <select name="nationality" id="nationality">
                <option value="" selected disabled hidden>Nationality</option>
                <option value="british">British</option>
                <option value="American">American</option>
                <option value="dutch">Dutch</option>
                <option value="nigerian">Nigerian</option>
            </select>
            <br />
            <select name="personality-type" id="personality-type">
                    <option value="" selected disabled hidden>Personality Type</option>
                    <option value="estj">ESTJ</option>
                    <option value="entj">ENTJ</option>
                    <option value="intj">INTJ</option>
                    <option value="infj">INFJ</option>
                    <option value="estp">ESTP</option>
                    <option value="enfp">ENFP</option>
                    <option value="istp">ISTP</option>
                    <option value="infp">INFP</option>
            
            </select>





          </form>
        </div>
      </div>
    );
}