function About({ setPage }) {
   return (
      <div className='bg-blue-400 h-full flex flex-col justify-center'>
         This game is developed by AASTU software engineering 4th year students.
         <div>Section B</div>
         <div>Group 3</div>
         <table className='mx-auto'>
            <thead>
               <tr>
                  <th>
                     N<sub>o</sub>
                  </th>
                  <th>Full Name</th>
                  <th>Id</th>
               </tr>
               <tr>
                  <td align='left' className='px-3'>
                     1
                  </td>
                  <td align='left' className='px-3'>
                     Eyorab Haile
                  </td>
                  <td align='left' className='px-3'>
                     ETS 0473/13
                  </td>
               </tr>
               <tr>
                  <td align='left' className='px-3'>
                     2
                  </td>
                  <td align='left' className='px-3'>
                     Eyosias Shisema
                  </td>
                  <td align='left' className='px-3'>
                     {' '}
                     ETS 0478/13{' '}
                  </td>
               </tr>
               <tr>
                  <td align='left' className='px-3'>
                     3
                  </td>
                  <td align='left' className='px-3'>
                     Haileiyesus Mesafint
                  </td>
                  <td align='left' className='px-3'>
                     ETS 0571/13
                  </td>
               </tr>
               <tr>
                  <td align='left' className='px-3'>
                     4
                  </td>
                  <td align='left' className='px-3'>
                     Haileleul Girma
                  </td>
                  <td align='left' className='px-3'>
                     ETS 0573/13
                  </td>
               </tr>
               <tr>
                  <td align='left' className='px-3'>
                     5
                  </td>
                  <td align='left' className='px-3'>
                     Haileye Aragaw
                  </td>
                  <td align='left' className='px-3'>
                     ETS 0574/13
                  </td>
               </tr>
            </thead>
         </table>
         <button
            onClick={() => setPage(1)}
            className='border border-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center self-center'
         >
            Home
         </button>
      </div>
   )
}
export default About
