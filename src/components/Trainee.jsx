
import React from "react";
// import '../css/trainee.css'
import YourProfile from "./YourProfile";
import YourTraining from "./YourTraining";
import Data from '../example-data.json'


export default function Trainee() {
//     const { degree } = Data
//     const loop = degree?.map(d => console.log(d.degree))

// console.log(loop)

    const profile = Data.map((data) => {
      
        return <YourProfile
            key={data.id}
            {...data}
        />
    })

    const training = Data.map((train) => {
        return <YourTraining
            key={train.id}
            {...train}
        
        />
    })

    return (
        <div>
             {profile}
             {training}
        </div>
    )
}