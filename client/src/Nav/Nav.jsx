import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, cn} from "@nextui-org/react";

export const Nav = () => {
  return (
    <Navbar position='static' classNames={ 
        { 
          base: cn("bg-nba-primary-blue mb-10 py-2")
        }
      }>
      <NavbarBrand>
        <p className='font-bold text-5xl mr-4 italic text-white'>Custom</p>
        <p className='font-bold text-5xl italic text-white'>BoxScores</p>
      </NavbarBrand>
    </Navbar>
  )
}
