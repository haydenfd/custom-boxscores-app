import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, cn} from "@nextui-org/react";

export const Nav = () => {
  return (
    <Navbar position='static' classNames={ 
        { 
          base: cn("bg-nba-primary-blue mb-10 py-2 shadow-xl")
        }
      }>
      <NavbarBrand>
        <p className='font-bold text-5xl mr-4  text-white'>Custom</p>
        <p className='font-bold text-5xl text-nba-primary-red/80'>BoxScores</p>
      </NavbarBrand>
    </Navbar>
  )
}
