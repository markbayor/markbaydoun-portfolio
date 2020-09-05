import React from "react"
import { Header } from "../layout/Header"
import '../styles/index.scss'
import { Navbar } from "../components/Navbar"
import { Helmet } from 'react-helmet'
import { Education, Interests, Introduction, Projects, Resume } from '../layout/sections'


export default function Home() {
  return (
    <div className='home'>
      {/* @ts-ignore */}
      <Helmet>
        <title>Mark Baydoun's portfolio</title>
        <meta name='description' content='Portfolio for Mark Baydoun, a Full Stack Software Engineer' />
      </Helmet>
      <Header />
      <Navbar />
      <Introduction />
      <Projects />
      <Education />
      <Interests />
      <Resume />
    </div>
  )
}
