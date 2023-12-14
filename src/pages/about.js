/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/self.png'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const about = () => {
    return (
        <>
            <Head>
                <title>Srijit Kundu | About Page</title>
                <meta name="description" content="" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" />
                    <div className='grid grid-cols-8 mt-10 gap-16 w-full'>
                        <div className='col-span-4 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-1g font-bold uppercase
• text-dark/75 dark:text-light/75' >Biography</h2>
                            <p className='font-medium '>
                                Hello, I'm Srijit Kundu, a machine learning engineer with a knack for crafting intelligent and impactful solutions. With 4 years of hands-on experience, I thrive on turning complex challenges into innovative outcomes.
                            </p>
                            <p className='font-medium my-4 ' >
                                I believe that machine learning goes beyond algorithms – it's about addressing real-world problems and creating solutions that resonate. Whether I'm developing predictive models, optimizing algorithms, or diving into deep learning, my commitment to excellence and user-centric solutions remains unwavering.
                            </p>
                            <p className='font-medium '>
                                In the realm of artificial intelligence, I'm dedicated to bringing my skills and passion to shape the future. Let's collaborate on your next project, where data meets innovation!"
                            </p>
                        </div>

                        <div className='col-span-4 relative h-auto rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                            <Image src={profilePic} alt='Srijit' className='w-full h-auto rounded-2xl'
                            priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                        </div>
                    </div>
                   <Skills/>
                   <Experience/>
                   <Education/>
                </Layout>


            </main>
        </>
    )
}

export default about
