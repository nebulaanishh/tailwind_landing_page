import React from "react"
import Layout from "../layout/layout"
import Hero from "../layout/hero"
import Cards from "./testimonial"
import Hero2 from "../layout/hero2"

function Homepage() {

    return (
      <div className=" bg-black min-h-screen">
      <Layout>
        <Hero />
        <Hero2 />
        <Cards />
      </Layout>
      </div>
    )
  }
  
export default Homepage
  