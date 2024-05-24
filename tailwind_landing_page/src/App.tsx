import { useState } from 'react'
import tailwindLogo from './assets/tailwind.svg'

import './App.css'
import Homepage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  // browswrr router nprovidder context
  // / ===> home pae 

  return (
    <>

    <Homepage />

    </>
  )
}

export default App
