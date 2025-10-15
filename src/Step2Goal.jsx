import { useState } from 'react'

function Goal({ onNext }) {
  const [targetDistance, setTargetDistance] = useState('')
  const [targetTime, setTargetTime] = useState('')
  const [knownDistance, setKnownDistance] = useState('')
  const [knownTime, setKnownTime] = useState('')
  const [runningDaysPerWeek, setRunningDaysPerWeek] = useState('')

  const [errors, setErrors] = useState({})

  const validateInputs = () => {
    const newErrors = {}

    if (!targetDistance) {
      newErrors.targetDistance = 'Please select a target distance'
    }
    if (!targetTime || Number(targetTime) <= 0) {
      newErrors.targetTime = 'Target time must be greater than 0'
    }
    if (!knownDistance || Number(knownDistance) <= 0) {
      newErrors.knownDistance = 'Known distance must be greater than 0'
    }
    if (!knownTime || Number(knownTime) <= 0) {
      newErrors.knownTime = 'Known time must be greater than 0'
    }
    if (!runningDaysPerWeek || Number(runningDaysPerWeek) <= 0) {
      newErrors.runningDaysPerWeek = 'Please select how many days you can train per week'
    }
    if (Number(knownDistance) === Number(targetDistance)) {
      newErrors.knownDistance = 'Known distance must be different from target distance'
    }

    return newErrors
  }

  const handleSubmit = () => {

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
      <h1>Goal Step</h1>
      <label>Goal Distance: </label>
      <select value={targetDistance} onChange={(e) => setTargetDistance(e.target.value)}>
        <option value="">Select Distance...</option>
        <option value="5">5K</option>
        <option value="10">10K</option>
        <option value="21.1">Half Marathon (21.1K)</option>
        <option value="42.2">Marathon (42.2K)</option>
      </select>
      <br />
      <label>Target Time (in minutes): </label>
      <input
        type="number"
        placeholder="e.g. 45 for 45 minutes"
        value={targetTime}
        onChange={(e) => setTargetTime(e.target.value)}
      />
      <br />
      <p>Please provide your current record information:</p>
      <label>
        Your current record distance (in km):
        <input
          type="number"
          placeholder="e.g. 5 for 5 km"
          value={knownDistance}
          onChange={(e) => setKnownDistance(e.target.value)}
        />
      </label>
      <br />
      <label>
        Your current record time (in minutes):
        <input
          type="number"
          placeholder="e.g. 30 for 30 minutes"
          value={knownTime}
          onChange={(e) => setKnownTime(e.target.value)}
        />
      </label>
      <br />
      <label>How many days per week can you train?</label>
      <select value={runningDaysPerWeek} onChange={(e) => setRunningDaysPerWeek(e.target.value)}>
        <option value="">Select Training Days...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default Goal
