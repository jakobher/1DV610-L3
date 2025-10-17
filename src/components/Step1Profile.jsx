import { useState } from 'react'
import ValidationService from '../services/ValidationService'

function Profile({ onNext }) {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [errors, setErrors] = useState({})

  const validationService = new ValidationService()

  const handleSubmit = () => {
    const validationErrors = validationService.validateProfileFields({ gender, age, activityLevel })

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
      <h1>Create Your Profile</h1>

      <section className="form-section">
        <h2>👤 Your Personal Details</h2>
        <div className="help-text">
          <p>This information will be used to calculate personalized fitness metrics.</p>
        </div>

        <div className="form-group">
          <label>Gender: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="number"
            placeholder="Select Age..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>
      </section>

      <section className="form-section">
        <h2>🏃 Activity Level</h2>
        <div className="help-text">
          <p>Select the activity level that best describes your current fitness level</p>
        </div>

        <div className="form-group">
          <label>Current Activity Level: </label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="">Select Activity Level...</option>
            <option value="low">Low - Little to no exercise</option>
            <option value="medium">Medium - Light activity occasionally</option>
            <option value="high">High - Regular exercise, good fitness</option>
            <option value="athlete">Athlete - Train frequently, high fitness</option>
          </select>
          {errors.activityLevel && <span className="error-message">{errors.activityLevel}</span>}
        </div>
      </section>

      <div className="help-text">
        <p>Click "Next" to continue to your goal settings</p>
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}

export default Profile
