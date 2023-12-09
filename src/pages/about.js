import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/self.png'

const about = () => {
    return (
        <>
            <Head>
                <title>Srijit Kundu | About Page</title>
                <meta name="description" content="" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!"  className='mb-4'/>
                    <div className='grid 

                    w-full grid-cols-8 gap-16'>
                        <div className='flex flex-col mx-24 items-start justify-start col-span-3 '>
                            <h2 className='text-lg  font-bold uppercase text-dark/75 mb-4'>Biogrpahy</h2>
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

                        <div className='col-span-3 relative h-auto rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 '>
                            <Image src={profilePic} alt='Srijit' className='w-full h-auto rounded-2xl'></Image>
                        </div>
                    </div>
                </Layout>


            </main>
        </>
    )
}

export default about
