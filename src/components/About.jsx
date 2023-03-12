import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#113977] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                         About
                     </p>
                </div>
                <div> </div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm: text-left text-4xl font-bold'>
                    <p>Hello. I'm Aliff, it's really nice to have you here. Feel free to take a look around!</p>
                </div>
                <div>
                   <p>I like to learn new things and I am passionate about continuously learning and I strive to eventuallly build and 
                    create high quality software which is functional and would help my potential clients to achieve their goals. This website is a showcase
                    of my current skills and I hope to continue to learn and improve my skills along the way. 
                   </p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default About
