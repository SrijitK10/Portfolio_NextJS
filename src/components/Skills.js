import React from 'react'
import Image from 'next/image'
import html from '../../public/images/skills/html.png'
import css from '../../public/images/skills/css.png'
import js from '../../public/images/skills/js.jpeg'
import react from '../../public/images/skills/react.png'
import next from '../../public/images/skills/nxtjs.png'
import tailwind from '../../public/images/skills/tailwind.png'
import python from '../../public/images/skills/py.png'
import flask from '../../public/images/skills/flask (Custom).png'
import c from '../../public/images/skills/c.png'
import cpp from '../../public/images/skills/c++.png'
import java from '../../public/images/skills/jsvs.png'
import tf from '../../public/images/skills/tf.png'
import np from '../../public/images/skills/np.png'
import pandas from '../../public/images/skills/pd.png'
import sklearn from '../../public/images/skills/sklearn.jpg'
import keras from '../../public/images/skills/keras.png'
import mysql from '../../public/images/skills/mysqk.png'


const Skills = () => {
  return (
    <>
      <h2 className='text-lg font-dark py-8'>Skills</h2>
      <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8 px-4 sm:px-12'>
      <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={c} alt='C' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">C</div>
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={cpp} alt='HTML' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">C++</div>
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={java} alt='Java' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">Java</div>
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={html} alt='HTML' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">HTML</div>
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={flask} alt='Flask' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">Flask</div>
          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={tailwind} alt='Flask' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">Tailwind</div>

          </div>
        </div>
        <div className='hover:scale-105 duration-500'>
          <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={python} alt='Flask' className='w-full h-full rounded-2xl object-cover' />
            <div className="mt-2 text-sm font-semibold">Python</div>
          </div>
        </div>
        {/* Add more skills as needed */}
      </div>
    </>
  );
};




export default Skills;
