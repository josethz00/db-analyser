import { useState } from 'react'
import './App.css'
import Latex from 'react-latex'

function CyclomaticComplexity() {
  const [edges, setEdges] = useState(0)
  const [nodes, setNodes] = useState(0)
  const [connectedComponents, setConnectedComponents] = useState(0)

  return (
    <div className="App">
      <h1>Cyclomatic Complexity</h1>
      <div className="card">
        <Latex displayMode={true}>$$M = E - N + 2P$$</Latex>
        <br />
        <ul>
          <li>
            <Latex>$E$</Latex> = total number of relations in the database (edges)
          </li>
          <li>
            <Latex>$N$</Latex> = total number of tables (nodes)
          </li>
          <li>
            <Latex>$P$</Latex> = tables with only one relation (connected components)
          </li>
        </ul>
        <div className='input-group'>
          <input
            onChange={(e) => setEdges(parseInt(e.target.value))}
            placeholder="E (Edges) ..."
            type="number"
          />
          <input
            onChange={(e) => setNodes(parseInt(e.target.value))}
            placeholder="N (Nodes) ..."
            type="number"
          />
          <input
            onChange={(e) => setConnectedComponents(parseInt(e.target.value))}
            placeholder="P (Connected Components) ..."
            type="number"
          />
        </div>
      </div>
      <p className="read-the-docs">
        <Latex displayMode={true}>{`$$M = ${edges} - ${nodes} + 2 × ${connectedComponents}$$`}</Latex>
        <Latex displayMode={true}>{`$$M = ${eval(`${edges} - ${nodes} + 2 * ${connectedComponents}`)}$$`}</Latex>
      </p>
    </div>
  )
}

export default CyclomaticComplexity
