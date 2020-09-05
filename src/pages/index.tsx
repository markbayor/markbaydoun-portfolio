import React, { useState } from "react"
import { Header } from "../layout/Header"
import '../styles/index.scss'
import { Navbar } from "../components/Navbar"
import { Contact } from "../components/Contact"
import { Helmet } from 'react-helmet'
import { Education, Interests, Introduction, Projects, Resume, Technologies } from '../layout/sections'
import { Footer } from "../layout/Footer"


export default function Home() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className='home'>
      {/* @ts-ignore */}
      <Helmet>
        <title>Mark Baydoun's portfolio</title>
        <meta name='description' content='Portfolio for Mark Baydoun, a Full Stack Software Engineer' />
      </Helmet>
      {showContact && <Contact setShow={setShowContact} />}
      <Header />
      <Navbar setShow={setShowContact} />
      <Introduction />
      <Projects />
      <Technologies />
      <Education />
      <Interests />
      <Resume />
      <Footer />
    </div>
  )
}
