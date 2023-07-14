import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import boardImage from './assets/board.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='game-container'>
        <img id='board-image' src={boardImage}></img>
      </div>
    </>
  )
}

export default App
