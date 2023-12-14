import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import chatter from '../../public/images/projects/Chatter.png';
import lingo from '../../public/images/projects/lingo.png';
import dl from '../../public/images/projects/dl.png';
import srm from '../../public/images/projects/srmp.png';
import portfolio from '../../public/images/projects/portfolio-cover-image.jpg';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);



const FeauturedProject = ({ type, link, title, summary, img, github }) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light p-12 dark:bg-dark dark:border-light'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'> <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2></Link>
                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={github} target="_blank" className='w-10 '> <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project=({title,type,img,summary,link,github})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light  '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'> <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2></Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={github} target="_blank" className='w-10 '> <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>
                    Srijit Kundu | Projects
                </title>
                <meta name="description" content="Srijit Kundu's Projects" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!'
                    className='mb-16' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeauturedProject type='Java Application' title='Chatter- Chat Application' summary='A portfolio website to showcase my work and skills' img={chatter} link='https://github.com/SrijitK10/Chat_Application_Java' github='https://github.com/SrijitK10/Chat_Application_Java'

                            />
                        </div>
                        <div className='col-span-6'>
                            <Project github='https://github.com/SrijitK10/DeepLearning_Projects' img={dl} title='Deep Learning Projects' type='Deep Learning' summary='Collection of basic deep learning projects'  link='https://github.com/SrijitK10/DeepLearning_Projects' />
                        </div>
                        <div className='col-span-6'>
                            <Project title='SRM Projects' type='Miscellaneous' summary='Collection of projects done during my time at SRM University' img={srm} link='https://github.com/SrijitK10/Projects_SRM' github='https://github.com/SrijitK10/Projects_SRM' />
                        </div>
                        <div className='col-span-12'>
                            <FeauturedProject github='https://github.com/SrijitK10/Smart_India_Hackathon_LingoFlow' link='https://github.com/SrijitK10/Smart_India_Hackathon_LingoFlow' type='Featured Project' title='LingoFlow- Language Translator' summary='LingoFlow is a groundbreaking Government Translation Portal designed to revolutionize communication for government agencies.' img={lingo} />
                        </div>
                        <div className='col-span-6'>
                            <Project title='Portfolio Website' type='Web Development' summary='A portfolio website to showcase my work and skills' img={portfolio} link='https://github.com/SrijitK10/Portfolio_NextJS' github='https://github.com/SrijitK10/Portfolio_NextJS'  />
                        </div>
                       
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects