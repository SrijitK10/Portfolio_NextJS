import React from 'react'
import Image from 'next/image'
import html from '../../public/images/skills/html.png'
// import css from '../../public/images/skills/css.png'
// import js from '../../public/images/skills/js.png'
// import react from '../../public/images/skills/react.png'
// import next from '../../public/images/skills/next.png'
// import tailwind from '../../public/images/skills/tailwind.png'
// import python from '../../public/images/skills/python.png'
import flask from '../../public/images/skills/flask.png'

const Skills = () => {
  return (
    <>
      <h2 className='text-lg font-dark py-8'>Skills</h2>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-12'>
        <div className='hover:scale-105 duration-500'>
          <div className='relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
            <Image src={html} alt='HTML' className='w-full h-full rounded-2xl object-cover' />
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
            <Image src={flask} alt='Flask' className='w-full h-full rounded-2xl object-cover' />
          </div>
        </div>
        {/* Add more skills as needed */}
      </div>
    </>
  );
};

export default Skills;
