import React, { useState } from 'react'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  const [state, setState] = useState(0)

  return (
    <div className="root-element">
      <header className="header">
        <span className="appstate">App State: {state}</span> <h1 className="title">Code Piece of Complete Guide to React Rendering Behavior</h1>
      </header>
      <main className="contents">
        <div>
          <button onClick={() => setState(state + 1)}>Update App Compoment's State</button>
        </div>
        <ParentComponent/>
      </main>
    </div>
)
}

export default App
