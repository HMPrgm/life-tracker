import React from 'react'
import NavbarLink from './navbarLink'

export default function Navbar() {
  return (
    <nav className='p-6 grid grid-cols-1 h-screen bg-slate-300'>
        <div className='flex flex-col'>
        <h3 className='text-lg font-bold'><NavbarLink href='/'>Hi User!</NavbarLink></h3>
          <NavbarLink href='/tasks'>Tasks</NavbarLink>
          <NavbarLink href='/habits'>Habits</NavbarLink>
          <NavbarLink href='/calendar'>Calendar</NavbarLink>


        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg font-bold'>Projects</h3>
          <NavbarLink href='/projects/school'>School</NavbarLink>
          <NavbarLink href='/projects/work'>Work</NavbarLink>
          <NavbarLink href='/projects/vacation'>Vacation</NavbarLink>
        </div>
    </nav>
  )
}
