import React, { useState } from "react"

//@ts-ignore
import favicon from '../../static/favicon.png'
import '../styles/index.scss'

import { Helmet } from 'react-helmet'

import { Header } from "../layout/Header"
import { Footer } from "../layout/Footer"
import { Navbar } from "../components/Navbar"
import { Contact } from "../components/Contact"
import { Education, Interests, Introduction, Projects, Resume, Technologies } from '../layout/sections'

export default function Home() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className='home'>
      {/* @ts-ignore */}
      <Helmet>
        <title>Mark Baydoun's portfolio</title>
        <meta name='description' content='Portfolio for Mark Baydoun, a Full Stack Software Engineer' />
        <link rel='shortcut icon' type='image/png' href={`${favicon}`} />
      </Helmet>
      {showContact && <Contact setShow={setShowContact} />}
      <Header />
      <Navbar setShow={setShowContact} />
      <Introduction />
      <Projects setShow={setShowContact} />
      <Technologies />
      <Education />
      {/* <Interests /> */}
      <Resume />
      <Footer />
    </div>
  )
}
