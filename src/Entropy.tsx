import { useState } from 'react'
import './App.css'
import Latex from 'react-latex'

function Entropy() {
  const [edges, setEdges] = useState(0)
  const [nodes, setNodes] = useState(0)
  const [connectedComponents, setConnectedComponents] = useState(0)

  return (
    <div className="App">
      <h1>Entropy</h1>
      <div className="card">
        Working on it...
      </div>
    </div>
  )
}

export default Entropy
