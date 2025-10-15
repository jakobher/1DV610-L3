import { useState } from 'react'

function Profile({ onNext }) {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [activityLevel, setActivityLevel] = useState('')

  const handleSubmit = () => {
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
      <br />
      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
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

      <br />
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default Profile
