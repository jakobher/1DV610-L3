import { RunningCalculator } from 'running-toolkit'
import './App.css'
import Profile from './Step1Profile.jsx'
import Goal from './Step2Goal.jsx'
import Result from './Step3Result.jsx'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const handleStepComplete = (stepData) => {
    console.log('Step completed with data:', stepData)
    setUserData({ ...userData, ...stepData })
    setCurrentStep(currentStep + 1)
  }

  const handleReset = () => {
    setUserData({})
    setCurrentStep(1)
  }

  return (
    <div>
      {currentStep === 1 && <Profile onNext={handleStepComplete} />}
      {currentStep === 2 && <Goal onNext={handleStepComplete} />}
      {currentStep === 3 && <Result userData={userData} onReset={handleReset} />}
    </div>
  )
}

export default App
