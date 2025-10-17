import { useState, useMemo } from 'react'
import DataFormatter from '../services/DataFormatter'
import RunningAnalyzer from '../services/RunningAnalyzer'

function Result({ userData, onReset }) {
  const analyzer = useMemo(() => new RunningAnalyzer(), [])
  const formatter = useMemo(() => new DataFormatter(), [])

  const [showZoneDescriptions, setShowZoneDescriptions] = useState(false)

  const profile = analyzer.analyzeProfile({
    gender: userData.gender,
    age: userData.age,
    activityLevel: userData.activityLevel,
  })
  const profileSummary = formatter.createProfileSummary(profile)
  const descriptions = analyzer.describePulseZones()

  const requiredPace = analyzer.calculateRequiredPace(userData.targetDistance, userData.targetTime)
  const requiredSpeed = analyzer.calculateSpeed(requiredPace)

  const isGoalRealistic = analyzer.assessGoalRealism({
    knownDistance: userData.knownDistance,
    knownTime: userData.knownTime,
    targetDistance: userData.targetDistance,
    targetTime: userData.targetTime,
  })
  const goalAssessment = formatter.createRealisticAssessment(isGoalRealistic)

  const predictions = analyzer.predictAllDistances(userData.knownDistance, userData.knownTime)
  const trainingplan = analyzer.generateTrainingPlan(userData.runningDaysPerWeek)
  const trainingDistances = analyzer.calculateTrainingDistances(userData.targetDistance)

  const handlePrint = () => {
    window.print()
  }

  const handleReset = () => {
    onReset()
  }

  return (
    <div>
      <h1>🏆 Your Training Plan & Results</h1>
      <p className="page-intro">Based on you profile and goals, here's your personalized fitness profile and training plan</p>

      <section className="profile-section">
        <h2>👤 Profile Summary</h2>
        <ul>
          <li>Age: {profileSummary.age}</li>
          <li>Gender: {profileSummary.gender}</li>
          <li>Resting Heart Rate: {profileSummary.restingHeartRate} bpm</li>
          <li>Max Heart Rate: {profileSummary.maxHeartRate} bpm</li>
          <li>VO2 Max: {profileSummary.vo2Max} ml/kg/min</li>
        </ul>
      </section>

      <section className="zones-section">
        <h2>💓 Pulse Zones</h2>
        <ul>
          <li>Zone 1: {formatter.formatHeartRateZone(profile.zones.zone1)}</li>
          <li>Zone 2: {formatter.formatHeartRateZone(profile.zones.zone2)}</li>
          <li>Zone 3: {formatter.formatHeartRateZone(profile.zones.zone3)}</li>
          <li>Zone 4: {formatter.formatHeartRateZone(profile.zones.zone4)}</li>
          <li>Zone 5: {formatter.formatHeartRateZone(profile.zones.zone5)}</li>
        </ul>
        <button onClick={() => setShowZoneDescriptions(!showZoneDescriptions)}>
          {showZoneDescriptions ? '▲ Hide' : '▼ Show'} Zone Descriptions
        </button>
        {showZoneDescriptions && (
          <div className="zone-descriptions">
            <h3>What do the zones mean?</h3>
            <ul>
              <li><strong>Zone 1:</strong> {descriptions.zone1}</li>
              <li><strong>Zone 2:</strong> {descriptions.zone2}</li>
              <li><strong>Zone 3:</strong> {descriptions.zone3}</li>
              <li><strong>Zone 4:</strong> {descriptions.zone4}</li>
              <li><strong>Zone 5:</strong> {descriptions.zone5}</li>
            </ul>
          </div>
        )}
      </section>
      <section className="goal-section">
        <h2>🎯 Goal Analysis</h2>
        <p>
          <strong>Your Distance Goal:</strong> {userData.targetDistance}km
        </p>
        <p>
          <strong>Your Time Goal:</strong> {formatter.formatTimeInMinutes(userData.targetTime)}
        </p>
        <p>
          <strong>Required Average Pace:</strong> {formatter.formatPaceForDisplay(requiredPace)}
          <em> ({formatter.formatSpeedForDisplay(requiredSpeed)})</em>
        </p>
        <p>
          <strong>
            {goalAssessment.icon} {goalAssessment.status}
          </strong>{' '}
          {goalAssessment.message}
        </p>
        <br />
      </section>
      <section className="predictions-section">
        <h2>⏱️Predicted Race Times</h2>
        <ul>
          {predictions.map((pred) => (
            <li key={pred.distance}>
              {formatter.formatDistanceName(pred.distance)}: {formatter.formatTimeInMinutes(pred.time)}
            </li>
          ))}
        </ul>
      </section>
      <section className="training-section">
        <h2>📅 Your Weekly Training Plan</h2>
        <div className="training-days">
          {trainingplan.filter(day => day.workout !== 'Rest').map((day, index) => (
            <div key={index} className="training-day">
              {day.workout}
            </div>
          ))}
        </div>
        <h3>Recommended Training Distances for Your Goal:</h3>
        <ul>
          <li>Easy Run: {formatter.formatTrainingDistance(trainingDistances.easyRun)}</li>
          <li>Tempo Run: {formatter.formatTrainingDistance(trainingDistances.tempoRun)}</li>
          <li>Long Run: {formatter.formatTrainingDistance(trainingDistances.longRun)}</li>
          <li>Intervals: {formatter.formatTrainingDistance(trainingDistances.intervals)}</li>
        </ul>

        <div className="help-text">
          <p>💡 Note: Your results will not be saved. Please take note/screenshot or print it. Click "Start Over" to create a new plan.</p>
        </div>
        <div className="button-container">
          <button onClick={handlePrint}>🖨️ Print Results</button>
          <button onClick={handleReset}>🔄 Start Over</button>
        </div>
      </section>
    </div>
  )
}

export default Result
