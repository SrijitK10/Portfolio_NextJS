import React from 'react'
import Image from 'next/image'
import html from '../../public/images/skills/html.png'
import css from '../../public/images/skills/css.png'
import js from '../../public/images/skills/js.jpeg'
import react from '../../public/images/skills/react.png'
import next from '../../public/images/skills/nxtjs.png'
import tailwind from '../../public/images/skills/tailwind.png'
import python from '../../public/images/skills/py.png'
import c from '../../public/images/skills/c.png'
import cpp from '../../public/images/skills/c++.png'
import java from '../../public/images/skills/jsvs.png'
import tf from '../../public/images/skills/tf.png'
import np from '../../public/images/skills/np.png'
import pandas from '../../public/images/skills/pd.png'
import sklearn from '../../public/images/skills/sklearn.jpg'
import keras from '../../public/images/skills/keras.png'
import mysql from '../../public/images/skills/mysqk.png'
import matpl from '../../public/images/skills/matplotlib.png'
import { useEffect,useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


// ... (import other images)

const SkillCard = ({ src, alt, title }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      controls.start({ opacity: 1, scale: 1,duration:0.5});
    } else {
      controls.start({ opacity: 0, scale: 0.5,duration:0.5});
    }
  };

  const handleHoverStart = () => {
    controls.start({ scale: 1.05,duration:0.5 });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1,duration:0.5 });
  };

  useEffect(() => {
    controls.start({ opacity: 0, scale: 0.5 });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={controls}
    >
      <div className='mx-auto relative h-40 w-40 rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xs:h-32 xs:w-32 xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[109%] h-[104%] rounded-[1.5rem] bg-dark dark:bg-light xs:flex xs:items-center xs:justify-between' />
        <Image src={src} alt={alt} className='w-full h-full rounded-2xl object-cover xs:w-[75%]  xs:h-[75%] xs:flex xs:items-center xs:justify-center xs:mx-auto md:' />
        <div className='mt-2 text-sm font-semibold'>{title}</div>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64
       w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full grid grid-cols-6 sm:grid-cols-2 gap-4 text-center py-8 px-4 sm:px-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xs:!gap-x-6'>
        <SkillCard src={c} alt='C' title='C' className='hover:scale-105 duration:400'/>
        <SkillCard src={cpp} alt='C++' title='C++' />
        <SkillCard src={java} alt='Java' title='Java' />
        <SkillCard src={python} alt='python' title='Python' />
        <SkillCard src={sklearn} alt='Scikit-learn' title='Scikit-learn' />
        <SkillCard src={tf} alt='tensorflow' title='TensorFlow' />
        <SkillCard src={keras} alt='keras' title='Keras' />
        <SkillCard src={np} alt='numpy' title='NumPy' />
        <SkillCard src={pandas} alt='pandas' title='Pandas' />
        <SkillCard src={mysql} alt='mysql' title='MySQL' />

        <SkillCard src={html} alt='HTML' title='HTML' />
        <SkillCard src={css} alt='CSS' title='CSS' />
        <SkillCard src={js} alt='JavaScript' title='JavaScript' />
        <SkillCard src={react} alt='React' title='React' />
        <SkillCard src={next} alt='Next.js' title='Next.js' />
        <SkillCard src={tailwind} alt='Tailwind' title='Tailwind' />

        {/* Repeat for other skills */}
      </div>
    </>
  );
};

export default Skills;
