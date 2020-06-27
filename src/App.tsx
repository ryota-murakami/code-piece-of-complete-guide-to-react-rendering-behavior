import React, { useState } from 'react'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  const [state, setState] = useState(0)

  return (
    <div className="root-element">
      <header>
        <span className="appstate">App State: {state}</span>{' '}
        <h1 className="title">
          Code Piece of Complete Guide to React Rendering Behavior
        </h1>
      </header>
      <main>
        <section className="How_New_Props_References_Affect_Render_Optimizations">
          <div className="container">
            <h2>
              "How New Props References Affect Render Optimizations" section
            </h2>
            <div>
              <button onClick={() => setState(state + 1)}>
                Update App Compoment's State
              </button>
            </div>
            <ParentComponent />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
