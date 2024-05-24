import { ReactNode } from 'react'

import Navbar from './navbar'
import Footer from './footer'


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
