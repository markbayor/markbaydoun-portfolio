import React from 'react';
import { GithubIcon, LinkedinIconSmall } from '../assets';

const Navbar = ({ setShow }: any) => {

  return (
    <nav className='nav'>
      <div>
        <div className="nav__social">
          <a href="#" className="btn nav__btn" onClick={() => setShow(true)}>Contact</a>
          <a href="https://github.com/markbayor" target="_blank" rel="noopener noreferrer" className="a__link contact__content-link"><GithubIcon className='icon icon__small' /></a>
          <a href="https://www.linkedin.com/in/markbayor/" target="_blank" rel="noopener noreferrer" className="a__link contact__content-link"><LinkedinIconSmall className='icon icon__small' /></a>
        </div>
      </div>
      <div>
        <a href="#introduction" className="btn nav__btn">Introduction</a>
        <a href="#projects" className="btn nav__btn">Projects</a>
        <a href="#technologies" className="btn nav__btn">Technologies</a>
        <a href="#education" className="btn nav__btn">Education</a>
        <a href="#resume" className="btn nav__btn">Resume</a>
      </div>
    </nav>
  )
}

export { Navbar }