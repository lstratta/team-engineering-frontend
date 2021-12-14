import React from "react";
import '../css/your-profile.css'

export default function YourTraining({cohort, learningPath, trainer, trainingFinishDate}) {
    return (
        <div>
            <div className="profile-edit">
                <h2 className="training">Your Training</h2>
            </div>

            <div className="summary-section">
                <div className="your-training-info">
                    <p className="training-info">Cohort: {cohort}</p>
                    <p className="training-info">Learning Path: {learningPath}</p>
                    <p className="training-info">Trainer: {trainer}</p>
                    <p className="training-info">Training: {trainingFinishDate}</p>
                </div>

                <div className="training-summary">
                    <div className="box2">
                        <p className="ts-list">Module 1, Challenge A: PASSED</p>
                        <p className="ts-list">Module1, Challenge B: PASSED</p>
                        <p className="ts-list">Module 2, Challenge C: TODO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}