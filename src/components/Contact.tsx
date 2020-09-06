import React, { useState } from 'react';
import { GithubIcon, LinkedinIconSmall, MailIcon } from '../assets';
import emailjs, { init } from 'emailjs-com';
init(process.env.EMAILJS_ID);

const Contact = ({ setShow }: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  function onSubmit() {
    if (name && email && message) {
      emailjs.send("service_zaktz87", "template_enmszxe", {
        "from_name": name,
        "from_email": email,
        "reply_to": email,
        message
      }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(() => {
          setName('')
          setEmail('')
          setMessage('')
          setShow(false)
        }, 5000)
      }, function (error) {
        console.log('FAILED...', error);
      });
    }
  }

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
            <form action="" className="contact__form" onSubmit={e => e.preventDefault()}>
              <input placeholder='Your name' type="text" className="contact__form-input" value={name} onChange={(e => setName(e.target.value))} required />
              <input placeholder='Your e-mail' type="email" className="contact__form-input" value={email} onChange={(e => setEmail(e.target.value))} required />
              <textarea placeholder='Your message...' className="contact__form-input" value={message} onChange={(e => setMessage(e.target.value))} required />
              <button className="btn btn-contact" onClick={onSubmit} >Send</button>
              {loading && <h4 className="heading--quaternary">Sending</h4>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact }