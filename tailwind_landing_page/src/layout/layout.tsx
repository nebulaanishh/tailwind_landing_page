import React, { ReactNode } from 'react'

import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'


const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      <Navbar />
      <Hero />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
