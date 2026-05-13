import React from 'react'
import { Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Navset from './Navset'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Whoweare from './Whoweare'
import Section4 from './Section4'
import Ourclient from './Ourclient'
import Ourproduct from './Ourproduct'
import Affiliations from './Affiliations'
import Latestnews from './Latestnews'
import Faq from './Faq'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Section1/>
       <Section2/>
      <Whoweare/>
      <Section4/>
      {/* <Ourclient/> */}
      <Ourproduct/>
      <Affiliations/>
      
      <Latestnews/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default Home