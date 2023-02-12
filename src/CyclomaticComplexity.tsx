import { useState } from 'react'
import './App.css'
import Latex from 'react-latex'
import parse from './parse'

function CyclomaticComplexity() {
  const [edges, setEdges] = useState(0)
  const [nodes, setNodes] = useState(0)
  const [connectedComponents, setConnectedComponents] = useState(0)
  const [calculationMode, setCalculationMode] = useState<'user-input' | 'from-schema'>('user-input')
  const [sqlSchema, setSqlSchema] = useState('')

  const handleSqlSchemaChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSqlSchema(e.target.value)
    const {
      singleRelationTablesCount,
      totalRelationsCount,
      totalTablesCount
    } = await parse(e.target.value)

    setEdges(totalRelationsCount)
    setNodes(totalTablesCount)
    setConnectedComponents(singleRelationTablesCount)
  }

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
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <button
            style={{
              backgroundColor: calculationMode === 'user-input' ? 'green' : '#ccc',
              width: '50%',
              borderRadius: '5px 0 0 5px',
            }}
            onClick={() => setCalculationMode('user-input')}
          >
            User Input
          </button>
          <button
            style={{
              backgroundColor: calculationMode === 'from-schema' ? 'green' : '#ccc',
              width: '50%',
              borderRadius: '0 5px 5px 0',
            }}
            onClick={() => setCalculationMode('from-schema')}
          >
            From Schema
          </button>
        </div>
        {calculationMode === 'user-input' ? (
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
        ) : (
          <div className='input-group'>
            <textarea
              placeholder="Paste your SQL schema here ..."
              rows={10}
              cols={55}
              onChange={handleSqlSchemaChange}
            />
          </div>
        )}
      </div>
      <p className="read-the-docs">
        <Latex displayMode={true}>{`$$M = ${edges} - ${nodes} + 2 × ${connectedComponents}$$`}</Latex>
        <Latex displayMode={true}>{`$$M = ${eval(`${edges} - ${nodes} + 2 * ${connectedComponents}`)}$$`}</Latex>
      </p>
    </div>
  )
}

export default CyclomaticComplexity
