function Rules({ setPage }) {
   return (
      <section className='bg-blue-400 flex flex-col h-full justify-center gap-2 p-3'>
         <h1 className='text-3xl font-semibold'>የጨዋታ ህጎች</h1>

         <h1 className='font-semibold'>
            በዚህ ሙከራ ቺምፓንዚዎች ሰዎችን በተደጋጋሚ እንደበለጡ በጥናት ዝነኛ የተደረገ የማስታወስ ችሎታ ሙከራ ነው።
            በጥናቱ ውስጥ, ቺምፓንዚዎች በተደጋጋሚ ከሰዎች የበለጠ ሲያስመዘግቡ ታይቷል። አንዳንድ ቺምፓንዚዎች ከ 90%
            በላይ 9 አሃዞችን ማስታወስ ችለዋል። ይህ ጨዋታ የዚያ ሙከራ ማሳያ ሲሆን ከ 4 ሳጥኖች በመጀመር
            በእያንዳንዱ ደረጃ 1 እየጨመረ ይሄዳል።
         </h1>
         <ul>
            <li>
               ህግ ፩ : እያንዳንዱን ደረጃ ባለፉ ቁጥር አንድ ከበፊቱ የሳጥኖች ብዛት በአንድ የሚበልጥ አዲስ
               የተዘበራረቁ ሳጥኖች ይደረደራሉ።
            </li>
            <li>ህግ ፪ : ቅደም ተከተሉን ካልተከሉ ጨዋታው የሚያልቅ ይሆናል። </li>
            <li>ህግ ፫ : ጨዋታውን በማንኛውም ሰዓት ካቋረጡ በድጋሜ ካቋረጡበት መቀጠል አይችሉም። </li>
         </ul>
         <button
            onClick={() => setPage(3)}
            className='bg-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center self-center'
         >
            ወደ ጨዋታው ውሰደኝ
         </button>
         <button
            onClick={() => setPage(1)}
            className='border-2 border-yellow-500 inline-flex px-6 py-3 text-2xl rounded-lg font-semibold cursor-pointer transition active:scale-95 justify-center self-center'
         >
            ወደ ማውጫ ተመለስ
         </button>
      </section>
   )
}
export default Rules
