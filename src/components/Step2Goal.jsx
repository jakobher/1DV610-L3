import { useState } from 'react'
import ValidationService from '../services/ValidationService'

function Goal({ onNext }) {
  const [targetDistance, setTargetDistance] = useState('')
  const [targetTime, setTargetTime] = useState('')
  const [knownDistance, setKnownDistance] = useState('')
  const [knownTime, setKnownTime] = useState('')
  const [runningDaysPerWeek, setRunningDaysPerWeek] = useState('')
  const [errors, setErrors] = useState({})

  const validationService = new ValidationService()

  const handleSubmit = () => {
    const validationErrors = validationService.validateGoalFields({
      targetDistance,
      targetTime,
      knownDistance,
      knownTime,
      runningDaysPerWeek,
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onNext({
      targetDistance: Number(targetDistance),
      targetTime: Number(targetTime),
      knownDistance: Number(knownDistance),
      knownTime: Number(knownTime),
      runningDaysPerWeek: Number(runningDaysPerWeek),
    })
  }
  return (
    <div>
      <h1>🏃 Set Your Running Goal</h1>
      <section className="form-section">
        <h2>🎯 Your Goal Details</h2>
        <div className="help-text">
          <p> Select your target distance and the time you aim to achieve it in.</p>
        </div>

        <div className="form-group">
          <label>Your Target Distance: </label>
          <select value={targetDistance} onChange={(e) => setTargetDistance(e.target.value)}>
            <option value="">Select Distance...</option>
            <option value="5">5K</option>
            <option value="10">10K</option>
            <option value="21.1">Half Marathon (21.1K)</option>
            <option value="42.2">Marathon (42.2K)</option>
          </select>
          {errors.targetDistance && <span className="error-message">{errors.targetDistance}</span>}
        </div>

        <div className="form-group">
          <label>Your Target Time (in minutes): </label>
          <input
            type="number"
            placeholder="e.g. 45 for 45 minutes"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
          />
          {errors.targetTime && <span className="error-message">{errors.targetTime}</span>}
        </div>
      </section>

      <section className="form-section">
        <h2>📊 Your Current Best Performance:</h2>
        <div className="help-text">
          <p>
            Enter a recent time for a <strong>similar distance</strong> to your goal (but not the same
            distance) The closer, the better prediction
          </p>
        </div>
        <div className="form-group">
          <label>Your current race distance (in km):</label>
          <input
            type="number"
            placeholder="e.g. 5 for 5 km"
            value={knownDistance}
            onChange={(e) => setKnownDistance(e.target.value)}
          />
          {errors.knownDistance && <span className="error-message">{errors.knownDistance}</span>}
        </div>
        <div className="form-group">
          <label>Your current race time (in minutes):</label>
          <input
            type="number"
            placeholder="e.g. 30 for 30 minutes"
            value={knownTime}
            onChange={(e) => setKnownTime(e.target.value)}
          />

          {errors.knownTime && <span className="error-message">{errors.knownTime}</span>}
        </div>
      </section>

      <section className="form-section">
        <h2>📅 Training Availability</h2>
        <div className="form-group">
          <label>How many days per week can you train?</label>
          <select value={runningDaysPerWeek} onChange={(e) => setRunningDaysPerWeek(e.target.value)}>
            <option value="">Select Training Days...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.runningDaysPerWeek && <span className="error-message">{errors.runningDaysPerWeek}</span>}
        </div>
      </section>

      <div className="help-text">
        <p>
          Click "Next" to generate your fitness profile and training plan. All fields are required. Make sure
          to provide realistic values for the best results.
        </p>
      </div>

      <div className="button-container">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}

export default Goal
