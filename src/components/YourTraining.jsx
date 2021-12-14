import React from "react";
import '../css/your-profile.css'

export default function YourTraining() {
    return (
        <div>
            <div className="profile-edit">
                <h2 className="training">Your Training</h2>
            </div>

            <div className="summary-section">
                <div className="your-training-info">
                    <p className="training-info">Cohort: xxxxxxxx</p>
                    <p className="training-info">Learning Path: xxxxxxx</p>
                    <p className="training-info">Trainer: Ed Wright</p>
                    <p className="training-info">Training: xx/xx/xxxx</p>
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