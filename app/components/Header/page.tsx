import ChatBot from '@/app/ChatBot/page'
import React from 'react'


export default function Header() {
  return (
    <>

{/*  Header Starts =====================================================================  */}

<header className="text-gray-400 bg-gray-900 body-font sticky top-0  z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="./" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           
        <img className="w-[50px] h-[50px] mx-3 " src="./img/Logo-doc-summ-.png" alt="icon png" />

            <span className="ml-3 text-xl">Summarizer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white" href="./">Home</a>

            <a className="mr-5 hover:text-white" href="#" >About Us</a>
            {/* <a className="mr-5 hover:text-white" href="#">Tools</a> */}
            {/* <a className="mr-5 hover:text-white" href="#">Blog</a> */}
            <a className="mr-5 hover:text-white" href="#">Contact Us</a>
        </nav>
        
        {/* <a href="./ChatBot">
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            ChatBot
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
        </a> */}

    </div>
</header>

{/* Header Ends ===================================================================== */}


    </>
  )
}
