import React from 'react'
import Recipi from '../assets/recipi.jpeg'
import TodoLer from '../assets/todo-ler.jpeg'
import Shapequest from '../assets/shapequest.jpeg'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#113977]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-400'>Portfolio</p>
                <p className='py-6'>Here is some of my most recent work.</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Recipi})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",}} className='shadow-lg shadow-[#040c16] group  container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-4xl font-bold text-white tracking-wider'>
                            Recipi 
                        </span>
                        <div>
                            <a href="https://recipi-react.onrender.com" target="_blank">
                                <button className='text-center px-4 py-3 mt-10 ml-10 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AliffRazif/recipi" target="_blank">
                                <button className='text-center px-4 py-3 ml-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TodoLer})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",}} className='shadow-lg shadow-[#040c16] group  container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-4xl font-bold text-white tracking-wider'>
                            Todo-ler
                        </span>
                        <div>
                            <a href="https://todo-ler.onrender.com" target="_blank">
                                <button className='text-center px-4 py-3 mt-10 ml-10 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AliffRazif/todo-ler" target="_blank">
                                <button className='text-center px-4 py-3 ml-4  bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Shapequest})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",}} className='shadow-lg shadow-[#040c16] group  container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-4xl font-bold text-white tracking-wider'>
                            Shapequest
                        </span>
                        <div>
                            <a href="https://pages.git.generalassemb.ly/aliffrazif/Shapequest/" target="_blank">
                                <button className='text-center px-4 py-3 mt-10 ml-10 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AliffRazif/shapequest" target="_blank">
                                <button className='text-center px-4 py-3 ml-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
       </div>
    </div>
  )
}

export default Portfolio
