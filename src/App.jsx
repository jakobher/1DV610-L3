import { RunningCalculator } from 'running-toolkit'
import './App.css'

function App() {
  const calc = new RunningCalculator()
  const pace = calc.calculatePace(5, 25)

  return (
    <div className="App">
      <h1>Running Toolkit Demo</h1>
      <p>Pace for 5 km in 25 minutes: {pace} min/km</p>
    </div>
  )
}

export default App
