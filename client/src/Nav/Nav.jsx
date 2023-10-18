import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export const Nav = () => {
  return (
    <Navbar position='static'>
      <NavbarBrand>
        <p className='font-bold text-5xl uppercase mr-4'>Custom</p>
        <p className='font-bold text-5xl uppercase'>BoxScores</p>
      </NavbarBrand>
    </Navbar>
  )
}
