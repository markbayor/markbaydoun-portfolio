import React from 'react';

const Navbar = () => {

  return (
    <nav className='nav'>
      <div>
        <a href="#introduction" className="btn nav__btn">Introduction</a>
        <a href="#projects" className="btn nav__btn">Projects</a>
        <a href="#skills" className="btn nav__btn">Skills</a>
        <a href="#education" className="btn nav__btn">Education</a>
      </div>
      <div>
        <a href="#interests" className="btn nav__btn">Interests</a>
        <a href="#resume" className="btn nav__btn">Resume</a>
        <a href="#contact" className="btn nav__btn">Contact</a>
      </div>
    </nav>
  )
}

export { Navbar }