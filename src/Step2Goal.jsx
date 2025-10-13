import { useState } from "react"

function Goal({ onNext }) {
return (
    <div>
      <h1>Goal Step</h1>
      <p>Testing..</p>
      <button onClick={onNext}>Next</button>
    </div>
)
}

export default Goal