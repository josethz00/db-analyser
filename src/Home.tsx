import './App.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="App">
      <h1>Database Analyzer 🧐</h1>
      <div className="card">
        <div className='links-section'>
          <Link to='/cyclomatic-complexity'>
            Cyclomatic Complexity
          </Link>
          <Link to='/entropy'>
            Entropy
          </Link>
        </div>
        <br />
        <article>
          <h2>What is this?</h2>
          <p>
            This is an <b>experimental</b> tool to help you analyze the quality of 
            your database modelling. It is a work in progress. So far, it
            only supports the calculation of the cyclomatic complexity of
            your database and the entropy of your database (in progress).
          </p>
        </article>
      </div>
    </div>
  )
}

export default Home
