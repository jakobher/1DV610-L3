import { RunningCalculator } from 'running-toolkit'
import './App.css'
import Profile from './Step1Profile.jsx'
import Goal from './Step2Goal.jsx'
import { useState } from 'react'

function App() {
  const [profileData, setProfileData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = (data) => {
    setProfileData(data)
    setCurrentStep(2)
  }

  return (
    <div>
      {currentStep === 1 && <Profile onNext={handleNext} />}
      {currentStep === 2 && <Goal profileData={profileData} />}
    </div>
  )
}

export default App
