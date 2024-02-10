import { Rect, Text } from 'react-konva'

function Rectangle({ id, x, y, width, height, show, visible, onClick }) {
   return (
      <>
         {show && (
            <Rect
               id={id.toString()}
               x={x}
               y={y}
               width={width}
               height={height}
               innerRadius={20}
               outerRadius={40}
               fill='#1c4be5'
               opacity={0.8}
               shadowColor='black'
               shadowBlur={10}
               shadowOpacity={0.6}
               shadowOffsetX={5}
               shadowOffsetY={5}
               onClick={onClick}
            />
         )}

         {show && visible && (
            <Text
               id={id.toString()}
               x={x}
               y={y}
               width={width}
               height={height}
               text={id}
               fill='#ffffff'
               fontSize={40}
               align='center'
               verticalAlign='middle'
               innerRadius={20}
               outerRadius={40}
               opacity={0.8}
               shadowColor='black'
               shadowBlur={10}
               shadowOpacity={0.6}
               shadowOffsetX={5}
               shadowOffsetY={5}
               onClick={onClick}
            />
         )}
      </>
   )
}
export default Rectangle
