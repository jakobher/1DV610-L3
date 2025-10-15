import { FitnessAnalyzer, RacePredictor, TrainingPlanGenerator, RunningCalculator } from "running-toolkit"
import { useState } from "react"

function Result({ userData, onReset }) {
    const fitness = new FitnessAnalyzer()
    const predictor = new RacePredictor()
    const planner = new TrainingPlanGenerator()
    const calc = new RunningCalculator()

    const profile = fitness.createCompleteProfile(
        userData.gender,
        userData.age,
        userData.activityLevel
    )

    const descriptions = fitness.describePulseZones()
    const formattedTargetTime = calc.formatTime((userData.targetTime))

    const predictedForGoal = predictor.predictRaceTime(
        userData.knownDistance,
        userData.knownTime,
        userData.targetDistance
    )

    const isGoalRealistic = predictedForGoal <= userData.targetTime

    const predict5k = predictor.predictRaceTime(userData.knownDistance, userData.knownTime, 5)
    const predict10k = predictor.predictRaceTime(userData.knownDistance, userData.knownTime, 10)
    const predictHalf = predictor.predictRaceTime(userData.knownDistance, userData.knownTime, 21.1)
    const predictMarathon = predictor.predictRaceTime(userData.knownDistance, userData.knownTime, 42.2)

    const trainingplan = planner.generateWeeklyRunningPlan(userData.runningDaysPerWeek)
    

    const handleReset = () => {
        onReset()
    }

    return (
        <div>
            <h1>Your Training Plan & Results</h1>
            <p>Based on your profile and goals, here is your current fitness assessment:</p>
            <h2>Profile Summary:</h2>
            <ul>
                <li>Gender: {profile.gender}</li>
                <li>Age: {profile.age}</li>
                <li>Max Heart Rate: {profile.maxHR} bpm</li>
                <li>Resting Heart Rate: {profile.restingHR} bpm</li>
                <li>VO2 Max: {profile.vo2Max} ml/kg/min</li>
            </ul>
            <h2>Pulse Zones:</h2>
            <ul>
                <li>Zone 1: {profile.zones.zone1.min} - {profile.zones.zone1.max} bpm - {descriptions.zone1}</li>
                <li>Zone 2: {profile.zones.zone2.min} - {profile.zones.zone2.max} bpm - {descriptions.zone2}</li>
                <li>Zone 3: {profile.zones.zone3.min} - {profile.zones.zone3.max} bpm - {descriptions.zone3}</li>
                <li>Zone 4: {profile.zones.zone4.min} - {profile.zones.zone4.max} bpm - {descriptions.zone4}</li>
                <li>Zone 5: {profile.zones.zone5.min} - {profile.zones.zone5.max} bpm - {descriptions.zone5}</li>
            </ul>
            <h2>Goal Analysis:</h2>
            <p><strong>Your Goal:</strong> {userData.targetDistance}km in {formattedTargetTime}</p>
            <p><strong>Required Pace to reach goal:</strong> {calc.calculatePace(userData.targetDistance, userData.targetTime)} min/km</p>
            <p>Your goal is <strong>{isGoalRealistic ? "Realistic" : "Not realistic"}</strong> based on your provided data.</p>
            <br />
            <h2>Predicted Times for Other Distances:</h2>
            <ul>
                <li>5K: {calc.formatTime(predict5k)}</li>
                <li>10K: {calc.formatTime(predict10k)}</li>
                <li>Half Marathon: {calc.formatTime(predictHalf)}</li>
                <li>Marathon: {calc.formatTime(predictMarathon)}</li>
            </ul>
            <br />
            <h2>Your Weekly Training Plan:</h2>
            <ul>
                {trainingplan.map((dayPlan) => (
                    <li key={dayPlan.day}>
                        <strong>{dayPlan.day}:</strong> {dayPlan.workout}
                    </li>
                ))}
            </ul>
            <button onClick={handleReset}>Start Over</button>
        </div>
    )
}

export default Result