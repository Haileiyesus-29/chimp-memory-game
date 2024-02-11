import { Layer, Stage } from 'react-konva'
import Rectangle from './Rectangle'
import { useEffect, useRef, useState } from 'react'

const INITIAL_RENDER = 4
let BOX_WIDTH = 50
let BOX_HEIGHT = 50

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

const addBoxes = (boxes, size) =>
   Array.from({ length: size }, () => chooseRandom(boxes))

function GameScreen({ setPage }) {
   const totalBoxes = useRef([])
   const canvasElement = useRef(null)
   const currentNumber = useRef(1)

   const [screen, setScreen] = useState({ width: null, height: null })
   const [level, setLevel] = useState(1)
   const [boxes, setBoxes] = useState([])
   const [failure, setFailure] = useState(false)

   useEffect(() => {
      const width = +canvasElement.current.clientWidth
      const height = +canvasElement.current.clientHeight
      if (width > 500) {
         BOX_WIDTH = 80
         BOX_HEIGHT = 80
      }
      setScreen({ width, height })
      totalBoxes.current = generateBoxes(width, height)
   }, [])

   useEffect(() => {
      setBoxes(addBoxes(totalBoxes.current, level + INITIAL_RENDER - 1))
      currentNumber.current = 1
   }, [level])

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

      if (id === boxes.length) setLevel(prev => prev + 1)
      else currentNumber.current++
   }

   const onPlayAgain = () => {
      if (level === 1) {
         setBoxes(addBoxes(totalBoxes.current, level + INITIAL_RENDER - 1))
         currentNumber.current = 1
      } else {
         setLevel(1)
      }
      setFailure(false)
   }

   return (
      <section className='flex flex-col justify-end gap-4 h-full p-2'>
         <div className='py-1 rounded-md text-3xl'>ደረጃ {level}</div>
         <div className='bg-blue-400 grow rounded-lg' ref={canvasElement}>
            {failure ? (
               <div className='w-full h-full bg-blue-500 flex  flex-col justify-center items-center gap-6'>
                  <p className='text-4xl'>
                     {level <= 3 && (
                        <>
                           ጨዋታውን ተሳስተዋል 🙄 <br />
                           ከአማካኝ በታች ውጤት <br />
                           ደረጃ {level}
                        </>
                     )}
                     {level > 3 &&
                        level <
                        (
                           <>
                              ጨዋታውን ተሳስተዋል <br />
                              አማካኝ ውጤት <br />
                              ደረጃ {level}
                           </>
                        )}
                     {level >= 7 && (
                        <>
                           ጨዋታውን ተሳስተዋል <br />
                           ከአማካኝ በላይ ውጤት <br />
                           ደረጃ {level}
                        </>
                     )}
                  </p>
                  <div
                     className='bg-yellow-500 py-3 px-6 rounded-md text-lg border-none cursor-pointer active:scale-'
                     onClick={onPlayAgain}
                  >
                     በድጋሜ ልሞክር
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
         <button
            onClick={() => setPage(1)}
            className='border border-green-500 py-3 rounded-md text-lg cursor-pointer transition active:scale-95'
         >
            አቋርጥ
         </button>
      </section>
   )
}

export default GameScreen
