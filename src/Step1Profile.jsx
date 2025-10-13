import { useState } from 'react'

function Profile({ onNext }) {
  const [selectedGender, setGender] = useState('')
  const [selectedAge, setAge] = useState('')
  const [selectedActivityLevel, setActivityLevel] = useState('')

  const handleSubmit = () => {
    onNext({
      gender: selectedGender,
      age: selectedAge,
      activityLevel: selectedActivityLevel,
    })
  }
  return (
    <div>
      <h1>Profile Step</h1>
      <p>Please fill in your profile information:</p>
      <label>Gender: </label>
      <select
        value={selectedGender}
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
        value={selectedAge}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label>Activity Level: </label>
      <select
        value={selectedActivityLevel}
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
