/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/bg2.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightbulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'
export default function Home() {
  return (
    <>
      <Head>
      
        <title>Srijit Kundu</title>
        <meta name="description" content="Srijit's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center z-0 text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full '>
              <Image src={profilePic} alt="srijit" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw">
                
              </Image>
            </div>
            <div className='w-3/4 flex flex-col item-center self-center lg:w-full lg:text-center'>


              <AnimatedText text="Crafting Tomorrow's Intelligence Today." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs '>
                Transforming ideas into intelligent solutions. Explore my latest projects showcasing expertise in machine learning, Python, TensorFlow, and scikit-learn. From predictive analytics to deep learning, let's redefine what's possible in the world of intelligent systems
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="./Srijit Resume.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'>Resume
                <LinkArrow className={"w-6 ml-1"}/></Link>

                <Link href="mailto:srijit2004@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base'>Contact</Link>
              </div>

            </div>
          </div>

        </Layout>
        <div className='absolute right-0 bottom-0 my-0 inline-block w-24 md:hidden'>
          <Image src={lightbulb} alt='SneaX' className='w-full h-full'></Image>
        </div>
      </main>
    </>
  )
}

//4:51:29