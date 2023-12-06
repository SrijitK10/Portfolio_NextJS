import React from 'react'
import { headers } from '../../next.config'
import Link from 'next/link'

const NavBar = () => {
  return (
   <header classname='w-full px-32 py-8 font-medium flex items-center justify-between'> 
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>

        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href='/' target={'_blank'}>T </Link>
            <Link href='/' target={'_blank'}>T </Link>
            <Link href='/' target={'_blank'}>T </Link>
            <Link href='/' target={'_blank'}>T </Link>
            <Link href='/' target={'_blank'}>T </Link>
        </nav>
            
   </header>
  )
}

export default NavBar