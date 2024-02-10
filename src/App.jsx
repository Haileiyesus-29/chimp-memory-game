import { Stage, Layer, Rect, Circle } from 'react-konva'
import './App.css'
import GameScreen from './components/GameScreen'
import Home from './components/Home'

function App() {
   return (
      <div className='flex justify-center w-screen h-screen p-2'>
         <div className='w-full h-full max-w-screen-xl  rounded-md shadow-lg overflow-hidden'>
            {/* <Home /> */}
            <GameScreen />
         </div>
      </div>
   )
}

export default App
