import React, { useState } from 'react'
import BoxDisplay from './components/BoxDisplay'
import BoxForm from './components/BoxForm'

const App = () => {
  const [boxes, setBoxes] = useState([])

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <BoxForm setBoxes={setBoxes} boxes={boxes} />
        </div>
        <div className="col">
          <BoxDisplay boxes={boxes} />
        </div>
      </div>
    </div>
  )
}

export default App