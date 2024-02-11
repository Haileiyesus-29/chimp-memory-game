import { Stage, Layer, Rect, Circle } from 'react-konva'
import './App.css'
import GameScreen from './components/GameScreen'
import Home from './components/Home'
import { useState } from 'react'
import Rules from './components/Rules'
import About from './components/About'

function App() {
   const [page, setPage] = useState(1)
   return (
      <div className='flex justify-center w-screen h-screen p-2'>
         <div className='w-full h-full max-w-screen-xl  rounded-md shadow-lg overflow-hidden'>
            {page === 1 && <Home setPage={setPage} />}
            {page === 2 && <Rules setPage={setPage} />}
            {page === 3 && <GameScreen setPage={setPage} />}
            {page === 4 && <About setPage={setPage} />}
         </div>
      </div>
   )
}

export default App
