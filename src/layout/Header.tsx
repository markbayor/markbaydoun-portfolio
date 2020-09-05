import React from "react"

const Header = () => {

  return (
    <header className='header'>
      <div className="header__text-box">
        <h1 className="heading--primary u-margin-bottom-none">
          Hello there.
        </h1>
        <h2 className="heading--secondary u-margin-top-big">
          My name is Mark. I'm a <span className="span--highlight">Full Stack Software Enginner.</span>
        </h2>
        <p className="heading--description u-margin-top-medium">
          I design, test and develop powerful and scalable progressive web apps, native apps, UI/UX, APIs, and more.
        </p>
      </div>
    </header>
  )
}

export { Header }