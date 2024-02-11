function Home({ setPage }) {
   return (
      <section className='flex flex-col justify-center gap-4 bg-blue-400 h-full p-4'>
         <h1 className='text-4xl uppercase'>ከቺምፓዚ እሻላለሁ ብለው ያስባሉ ?</h1>
         <button
            onClick={() => setPage(2)}
            className='bg-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center self-center'
         >
            ወደ ጨዋታው
         </button>
         <button
            onClick={() => setPage(4)}
            className='border border-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center self-center'
         >
            About us
         </button>
      </section>
   )
}
export default Home
