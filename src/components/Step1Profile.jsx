import { useState } from 'react'
import ValidationService from '../services/ValidationService'

function Profile({ onNext }) {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [errors, setErrors] = useState({})

  const validationService = new ValidationService()

  const handleSubmit = () => {
    const validationErrors = validationService.validateProfileFields(gender, age, activityLevel)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onNext({
      gender,
      age: Number(age),
      activityLevel,
    })
  }
  return (
    <div>
      <h1>Profile Step</h1>
      <p>Please fill in your profile information:</p>
      <label>Gender: </label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Select Gender...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <span className="error-message">{errors.gender}</span>}
      <br />
      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {errors.age && <span className="error-message">{errors.age}</span>}
      <br />
      <label>Activity Level: </label>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      >
        <option value="">Select Activity Level...</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="athlete">Athlete</option>
      </select>
      {errors.activityLevel && <span className="error-message">{errors.activityLevel}</span>}
      <br />
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default Profile
