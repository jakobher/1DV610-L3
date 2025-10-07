import { useState } from "react"

function Profile({ gender, age, activityLevel }) {
    const [selectedGender, setGender] = useState(gender)
    const [selectedAge, setAge] = useState(age)
    const [selectedActivityLevel, setActivityLevel] = useState(activityLevel)

    const handleSubmit = () => {
        onNext({
            gender: selectedGender,
            age: selectedAge,
            activityLevel: selectedActivityLevel
        })
    }
    return (
        <div>
            <h1>Profile Step</h1>
            <label>Gender: </label>
            <select value={selectedGender} onChange={e => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
    )
}

export default Profile