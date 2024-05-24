import React, { ReactNode } from 'react'

import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import Hero2 from './hero2'
import Cards from './cards'


const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
