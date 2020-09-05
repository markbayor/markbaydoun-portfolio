import React from 'react';
import { GithubIcon, LinkedinIconSmall, MailIcon } from '../assets';


const Contact = ({ setShow }: any) => {
  return (
    <div className="contact__bg">
      <div className="contact__content">
        <div className="btn-close" onClick={() => setShow(false)}>&times;</div>
        <h1 className="heading--secondary">Contact me</h1>
        <div className="contact__content-container">
          <div className="contact__content-left">
            <h3 className="heading--tertiary">You can find me on</h3>
            <a href="https://github.com/markbayor" target="_blank" rel="noopener noreferrer" className="a__link contact__content-link"><GithubIcon className='icon icon__small' /> Github profile</a>
            <a href="https://www.linkedin.com/in/markbayor/" target="_blank" rel="noopener noreferrer" className="a__link contact__content-link"><LinkedinIconSmall className='icon icon__small' />LinkedIn profile</a>
            <a href="#" className="a__link contact__content-link"><MailIcon className='icon icon__small' />mark@markbaydoun.dev</a>
          </div>
          <div className="contact__content-right">
            <h3 className="heading--tertiary">Or directly</h3>
            <form action="" className="contact__form">
              <input placeholder='Your name' type="text" className="contact__form-input" />
              <input placeholder='Your e-mail' type="email" className="contact__form-input" />
              <textarea placeholder='Your message...' className="contact__form-input" />
              <button className="btn btn-contact">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact }