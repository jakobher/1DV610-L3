import { useState } from 'react'

function Goal({ onNext }) {
  const [selectedGoal, setGoal] = useState('')
  const [selectedTargetTime, setTargetTime] = useState('')
  const [selectedCurrentRecordDistance, setCurrentRecordDistance] = useState('')
  const [selectedCurrentRecordTime, setCurrentRecordTime] = useState('')
  const [selectedTrainingDays, setTrainingDays] = useState('')

  const handleSubmit = () => {
    onNext({
      goal: selectedGoal,
      targetTime: selectedTargetTime,
      currentRecordDistance: selectedCurrentRecordDistance,
      currentRecordTime: selectedCurrentRecordTime,
      trainingDays: selectedTrainingDays,
    })
  }
  return (
    <div>
      <h1>Goal Step</h1>
      <p>Testing..</p>
      <label>Goal: </label>
      <select value={selectedGoal} onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select Distance...</option>
        <option value="5">5K</option>
        <option value="10">10K</option>
        <option value="21.1">Half Marathon (2.1k)</option>
        <option value="42.2">Marathon (4.2k)</option>
      </select>
      <label>Target Time (in minutes): </label>
      <input
        type="number"
        placeholder="e.g. 45 for 45 minutes"
        value={selectedTargetTime}
        onChange={(e) => setTargetTime(e.target.value)}
      />
      <br />
      <p>Please provide your current record information:</p>
      <label>
        Your current record distance (in km):
        <input
          type="number"
          placeholder="e.g. 5 for 5 km"
          value={selectedCurrentRecordDistance}
          onChange={(e) => setCurrentRecordDistance(e.target.value)}
        />
      </label>
      <label>
        Your current record time (in minutes):
        <input
          type="number"
          placeholder="e.g. 30 for 30 minutes"
          value={selectedCurrentRecordTime}
          onChange={(e) => setCurrentRecordTime(e.target.value)}
        />
      </label>
      <br />
      <label>How many days per week can you train?</label>
      <select
        value={selectedTrainingDays}
        onChange={(e) => setTrainingDays(e.target.value)}
      >
        <option value="">Select Training Days...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default Goal
