import { useState } from 'react'
import './App.css'
import Latex from 'react-latex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Database Analyzer 🧐</h1>
      <div className="card">
        <h3>
          Cyclomatic Complexity
        </h3>
        <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>
        <input onClick={() => setCount((count) => count + 1)} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
