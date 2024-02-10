import { Layer, Stage } from 'react-konva'
import Rectangle from './Rectangle'
import { useEffect, useRef, useState } from 'react'

const INITIAL_RENDER = 3
const BOX_WIDTH = 80
const BOX_HEIGHT = 80

const generateBoxes = (width, height) => {
   const rects = []
   let top = 10,
      left = 10

   while (height - top >= BOX_HEIGHT + 10) {
      rects.push({
         x: left,
         y: top,
         width: BOX_WIDTH,
         height: BOX_HEIGHT,
         show: true,
         visible: true,
      })

      if (width - left >= 2 * BOX_WIDTH + 10) {
         left += BOX_WIDTH + 5
      } else {
         top += BOX_HEIGHT + 5
         left = 10
      }
   }
   return rects
}

const chooseRandom = arr =>
   arr.splice(Math.floor(Math.random() * arr.length), 1).at(0)

const GameScreen = () => {
   const totalBoxes = useRef([])
   const canvasElement = useRef(null)
   const currentNumber = useRef(1)

   const [screen, setScreen] = useState({ width: null, height: null })
   const [level, setLevel] = useState(1)
   const [boxCount, setBoxCount] = useState(INITIAL_RENDER)
   const [boxes, setBoxes] = useState([])
   const [failure, setFailure] = useState(false)

   useEffect(() => {
      const width = +canvasElement.current.clientWidth
      const height = +canvasElement.current.clientHeight

      setScreen({ width, height })

      totalBoxes.current = generateBoxes(width, height)
      setBoxes(addBoxes(boxCount))
   }, [boxCount])

   const addBoxes = size =>
      Array.from({ length: size }, () => chooseRandom(totalBoxes.current))

   const handleClick = e => {
      const id = +e.target.id()

      if (id !== currentNumber.current) {
         setFailure(true)
         return
      }

      setBoxes(prev =>
         prev.map((box, boxId) =>
            boxId === id - 1
               ? { ...box, show: false, visible: false }
               : { ...box, visible: false }
         )
      )

      if (id === boxes.length) {
         setLevel(prev => prev + 1)
         setBoxCount(prev => prev + 1)
         currentNumber.current = 1
         return
      }
      currentNumber.current++
   }

   const onPlayAgain = () => {
      setBoxCount(INITIAL_RENDER)
      setLevel(1)
      setFailure(false)
      setBoxes([])
   }

   return (
      <section className='flex flex-col justify-end gap-4 h-full p-2'>
         <div className='py-1 rounded-md text-3xl'>Level {level}</div>
         <div className='bg-blue-400 grow rounded-lg' ref={canvasElement}>
            {failure ? (
               <div className='w-full h-full bg-red-700 flex  flex-col justify-center items-center gap-6'>
                  <p className='text-4xl'>
                     Game Over <br />
                     Level {level}
                  </p>
                  <div
                     className='bg-blue-500 py-3 px-6 rounded-md text-lg border-none'
                     onClick={onPlayAgain}
                  >
                     Play Again
                  </div>
               </div>
            ) : (
               <Stage width={screen.width} height={screen.height}>
                  <Layer>
                     {boxes.map((box, i) => (
                        <Rectangle
                           key={i + 1}
                           id={i + 1}
                           {...box}
                           onClick={handleClick}
                        />
                     ))}
                  </Layer>
               </Stage>
            )}
         </div>
         <div className='bg-green-500 py-3 rounded-md text-lg'>Cancel</div>
      </section>
   )
}

export default GameScreen
