import { Layer, Rect, Stage, Text } from 'react-konva'
import Rectangle from './Rectangle'

const TOTAL_RECTS = []
let width = window.innerWidth - 20
let height = window.innerHeight - 20
let rects = []
let top, left
while (height - top > 50) {
   if (width - left > 50) {
      rects.push({ x: left, y: top, width: 50, height: 50 })
      left += 55
   } else {
      top += 55
      left = 0
   }
}

function GameScreen() {
   return (
      <section className='flex flex-col justify-center gap-4 h-full p-4'>
         <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
               {/* <Text text='Start game' align='center' fontSize={30} /> */}
               <Rectangle
                  id={1}
                  height={60}
                  width={60}
                  x={60}
                  y={60}
                  show={true}
               />
            </Layer>
         </Stage>
      </section>
   )
}
export default GameScreen
