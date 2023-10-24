import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, cn} from "@nextui-org/react";
import { useLocation } from 'react-router-dom';

export const Nav = () => {

  const location = useLocation()

  return (
    <Navbar position='static' classNames={ 
        { 
          base: cn("bg-nba-primary-blue mb-10 py-2 shadow-xl")
        }
      }>
      <NavbarBrand>
        <Link href='/'>
          <p className='font-bold text-5xl mr-4  text-white'>Custom</p>
          <p className='font-bold text-5xl text-nba-primary-red/80'>BoxScores</p>
        </Link>
      </NavbarBrand>
      <NavbarContent>
      <NavbarItem>
          <Link href='/' className={`text-xl p-1 border-b-transparent border-b-4 text-white ${location.pathname == '/'? 'border-b-white font-semibold' : ''}`}>
            Live
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/calendar' className={`text-xl p-1 border-b-transparent border-b-4 text-white ${location.pathname == '/calendar'? 'border-b-white font-semibold' : ''}`}>
            Calendar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/preferences' className={`text-xl p-1 border-b-transparent border-b-4 text-white ${location.pathname == '/preferences'? 'border-b-white font-semibold' : ''}`}>
            Preferences
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
