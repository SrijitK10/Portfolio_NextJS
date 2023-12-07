import React from 'react'
import { headers } from '../../next.config'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  {TwitterIcon, GithubIcon, LinkedInIcon, SvgComponent, InstagramIcon } from './Icons'
import {motion} from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router= useRouter();
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
      h-[1px] inline-block w-0 bg-dark 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] 
      ease duration-300
      ${router.asPath === href ?'w-full':'w-0'}`} >
        &nbsp;
      </span>
    </Link>

  )
}
const NavBar = () => {
  return (
    <header className='flex justify-between items-center w-full px-32 py-8 font-medium'>
      <nav>
        <CustomLink href='/' title="Home" className=' mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='ml-4' />

      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='https://x.com/SrijitKundu4?t=IuDVhPNge9woh9jh9Ey5nw&s=09' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'>
          <TwitterIcon/> 
        </motion.a>
        <motion.a href='https://github.com/SrijitK10' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'>
          <GithubIcon/>
        </motion.a>
        <motion.a href='www.linkedin.com/in/srijit-kundu' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><LinkedInIcon/> </motion.a>
        <motion.a href='https://instagram.com' target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><InstagramIcon/> </motion.a>
        
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-0-50%]'>
        <Logo />
      </div>

    </header>
  )
}

export default NavBar