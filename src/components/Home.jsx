function Home() {
   return (
      <section className='flex flex-col justify-center gap-4 bg-blue-400 h-full p-4'>
         <h1 className='text-4xl uppercase'>Are you better than chimpanzee?</h1>
         <button className='bg-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center'>
            Let's find out
         </button>
      </section>
   )
}
export default Home
