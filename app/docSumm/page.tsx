"use client"
import React, { useState, useEffect } from 'react';

export default function DocSummarize() {
  const [fileName, setFileName] = useState('No file selected');

  useEffect(() => {
    const fileInput = document.getElementById('fileInput');

    const handleFileChange = () => {
      if (fileInput.files && fileInput.files[0]) {
        setFileName(fileInput.files[0].name);
      }
    };

    fileInput.addEventListener('change', handleFileChange);

    return () => {
      fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <>
      {/* Tool Starts ===================================================================== */}
      <section className="text-gray-400 bg-gray-900 body-font  ">
        <div className="container mx-auto flex flex-col px-2 py-2 justify-center items-center">
          {/* Title */}
          <div className="w-full md:w-2/3 flex flex-col mb-8 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-white">
              Summarize your Text
            </h1>

            <p className="mb-8 leading-relaxed text-gray-400">
              Upload, drag, drop, or paste your text here for seamless and accurate text summarization.
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="max-w-3xl bg-gray-800 rounded-lg shadow-md p-10 flex justify-center items-center mx-auto">
          <div
            className="m-4 relative border-2 border-dashed border-gray-600 rounded-lg h-60 w-80 flex justify-center items-center bg-gray-900 hover:border-blue-500 transition-colors">
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mx-auto mb-3 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h3.586a1 1 0 01.707.293l2.707 2.707a1 1 0 001.414 0l2.707-2.707a1 1 0 01.707-.293H16a1 1 0 001-1V4a1 1 0 00-1-1H4zm10 8H6a1 1 0 000 2h8a1 1 0 000-2z" />
              </svg>
              <p className="text-gray-400">
                Drag/Drop or paste your text here or click to upload
              </p>

              {/* Selected File------------------------------- */}
              <div className="text-gray-400 mt-4">Selected File: {fileName}</div>

            </div>
        
          </div>
          
          

          {/* Result Section */}
          <div
            className="m-4 relative border-2 border-dashed border-gray-600 rounded-lg h-60 w-80 flex justify-center items-center bg-gray-900 hover:border-blue-500 transition-colors">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mx-auto mb-3 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h3.586a1 1 0 01.707.293l2.707 2.707a1 1 0 001.414 0l2.707-2.707a1 1 0 01.707-.293H16a1 1 0 001-1V4a1 1 0 00-1-1H4zm10 8H6a1 1 0 000 2h8a1 1 0 000-2z" />
              </svg>
              <p className="text-gray-400">Output</p>
            </div>
          </div>
        
        </div>

        

        <div className="flex justify-center items-center mt-8 space-x-6">
          {/* Button Upload Actions */}
          <button className="px-6 py-2 text-lg text-white bg-green-500 rounded hover:bg-green-600">
            Summarize Text
          </button>
          {/* Button Save Actions */}
          <button className="px-6 py-2 text-lg text-white bg-green-500 rounded hover:bg-green-600">
            Save Text
          </button>
        </div>

        {/* Instructions */}
        <div className="container px-5 py-2 mx-auto mt-10">
        <div className="text-center mb-20">
            <h2 className="sm:text-2xl text-2xl font-medium text-center title-font text-white mb-2">Follow these steps to use this Tool </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

            <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">

                    {/*  1 https://www.svgrepo.com/svg/6974/one?edit=true -------------------------- */}
                    <img className="w-[25px] h-[25px] mx-3 " src="./img/icons/one.png" alt="icon png" />

                    <span className="title-font font-medium text-white">Drag / Paste your Text </span>
                </div>
            </div>

            <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">

                    <img className="w-[25px] h-[25px] mx-3 " src="./img/icons/two.png" alt="icon png" />

                    <span className="title-font font-medium text-white">Click Summarize Text</span>
                </div>
            </div>

            <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">

                    <img className="w-[25px] h-[25px] mx-3 " src="./img/icons/three.png" alt="icon png" />

                    <span className="title-font font-medium text-white">Click again for more improvement</span>
                </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">

                    <img className="w-[25px] h-[25px] mx-3 " src="./img/icons/four.png" alt="icon png" />

                    <span className="title-font font-medium text-white">Copy / Save Text</span>
                </div>
            </div>



        </div>

    </div>
  





      </section>
    </>
  );
}
